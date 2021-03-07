import React,{useContext} from 'react';
import {List,Spin,Avatar} from 'antd';
import {AppContext} from '../store/Reducer'
import { UserOutlined } from '@ant-design/icons';

const Books:React.FC = () => {
    const {state} = useContext(AppContext);
    
    return (
        <Spin spinning={state.Loading} tip="Loading...">
            <List
            pagination={
                {
                    total:state.Books.length,
                    defaultCurrent:0,
                    defaultPageSize:20,
                }
            }
            size="large"
            bordered
            dataSource={state.Books}
            renderItem={book => <List.Item><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />{book.name}</List.Item>}
            />
        </Spin>
    )
}

export default Books;