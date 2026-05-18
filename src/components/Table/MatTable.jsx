import axios from 'axios';
import React, { useEffect } from 'react'
import { useScannerStore } from '../../store/useScannerStore';
import RangeBar from '../Bar/RangeBar';
import DeviationBar from '../Bar/DeviationBar';

const MatTable = () => {
  const {setMatTableData, ohlData} = useScannerStore();

  useEffect(() => {
    setMatTableData();
  }, []);

  return (
    <section className='mt-5 w-full flex flex-col justify-start items-center'>
        <table className='border-2 border-collapse border-black overflow-x-auto'>
            <thead>
                <tr>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>SYMBOL</th>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>LTP</th>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>Momentum</th>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>OPEN</th>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>Deviation from Pivots</th>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>TODAY'S RANGE</th>
                    <th className='border-2 dark:border-gray-400 px-4 py-2'>OHL</th>
                </tr>
            </thead>

            <tbody>
                {ohlData.length > 0 ?
                ohlData.map((data) => (
                    <tr key={data.symbol}>
                        <td className='border-2 dark:border-gray-400 px-4 py-2'>
                            <div className='flex items-center gap-1'>
                                <div className='w-7 rounded-full bg-gray-300 dark:bg-gray-500
                                text-xl text-center'>
                                    {data.symbol[0]}
                                </div>
                                <p>{data.symbol}</p>
                            </div>
                        </td>
                        <td className='border-2 dark:border-gray-400 px-4 py-2'>
                            {data.ltp}
                        </td>
                        <td className='border-2 dark:border-gray-400 px-4 py-2'>
                            <div className='grid grid-cols-2 gap-2'>
                                <p className='bg-green-300 px-1 rounded-md'>{data.stockMomentumRank}</p>
                                <p className='bg-green-300 px-1 rounded-md'>{data.stockOutperformanceRank}</p>
                                <p className='bg-green-300 px-1 rounded-md'>{data.sectorTodayRank}</p>
                                <p className='bg-green-300 px-1 rounded-md'>{data.sectorMomentumRank}</p>
                            </div>
                        </td>
                        <td className='border-2 dark:border-gray-400 px-4 py-2'>
                            {data.open}
                        </td>
                        <td className='border-2 dark:border-gray-400 px-4 py-2'>
                            <DeviationBar ltp={data.ltp} symbol={data.symbol} />
                        </td>
                        <td className='border dark:border-gray-400 px-4 py-2'>
                            <RangeBar low={data.low} ltp={data.ltp} high={data.high} />
                        </td>
                        <td className='border-2 dark:border-gray-400 px-4 py-2'>
                            {data.openHighLowSignal}
                        </td>
                    </tr>
                )) :
                (<tr>
                    <td>No data avaibale</td>
                </tr>)}
            </tbody>
        </table>
    </section>
  )
}

export default MatTable