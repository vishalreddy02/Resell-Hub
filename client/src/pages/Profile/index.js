import React from 'react';
import { Tabs } from 'antd';
import Products from "./Products";
import UserBids from './UserBids';
import { useSelector } from 'react-redux';
import moment from 'moment';

function Profile(){
    const {user} = useSelector((state) => state.users);
    return(
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Products" key="1">
                <Products />
            </Tabs.TabPane>
            <Tabs.TabPane tab="My Bids" key="2">
                <UserBids />
            </Tabs.TabPane>
            <Tabs.TabPane tab="General" key="3">
                <div className="flex flex-col w-1/3">
                    <span className='text-primary text-xl flex justify-between'>
                        Name : <b className='text-xl'>{user.name}</b>
                    </span>
                    <span className='text-primary text-xl flex justify-between'>
                        Email : <b className='text-xl'>{user.email}</b>
                    </span>
                    <span className='text-primary text-xl flex justify-between'>
                        created At : {" "}<b className='text-xl'>{moment(user.createdAt).format("MMM D , YYYY hh:mm A")}</b>
                    </span>
                </div>
            </Tabs.TabPane>
        </Tabs>
    )
}

export default Profile