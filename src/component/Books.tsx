import React from 'react';
import {List,Spin,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAppSelector } from '../store/hooks'
import {
    selectBooks
} from '../store/bookSlice'

import {
    selectLoading
} from '../store/loadingSlice'

const Books = () => {
    const books = useAppSelector(selectBooks);
    const loading = useAppSelector(selectLoading);
    
    return (
        <Spin spinning={loading} tip="Loading...">
            <List
            pagination={
                {
                    total:books.length,
                    defaultCurrent:0,
                    defaultPageSize:20,
                }
            }
            size="large"
            bordered
            dataSource={books}
            renderItem={book => <List.Item><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />{book.name}</List.Item>}
            />
        </Spin>
    )
}

export default Books;