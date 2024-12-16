'use client'

import {LineChart, Line, XAxis, YAxis,CartesianGrid, ResponsiveContainer} from 'recharts';
import {Card, CardContent, CardDescription,CardHeader,CardTitle} from '@/components/ui/card'
import { AnalyticsItem } from '@/types/analytics';
import analytics from '@/data/analytics';

const AnalyticsChart = () => {
    return ( <div className='p-3'>
        <Card>
            <CardHeader>
                <CardTitle>Analytics For this Year</CardTitle>
                <CardDescription>Views per Month</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width:'100%',height:300}}>
                    <ResponsiveContainer>
                        <LineChart width={1100} height={300} data={analytics}>
                            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                            <CartesianGrid stroke='#ccc'  />
                            <XAxis dataKey='name' />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </div> );
}
 
export default AnalyticsChart;