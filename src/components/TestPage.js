import React, { Component, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './Testpage.css';
import Card from '../component/Card/Card';
import { Tabs, Pagination } from 'antd';
import 'antd/dist/antd.css';
import { UsergroupDeleteOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import DataTable from '../component/DataTable/DataTable';
import { Sticky, StickyContainer } from 'react-sticky';
import pic from "../assets/pic.jpg"
const { TabPane } = Tabs;

const columns1 = [
    {
        title: 'Employé',
        dataIndex: 'employe',
        key: 'employe',
        render: text =>
            <div><img className='avatar' src={pic} /> {text} </div>


    },
    {
        title: 'Duré de congé',
        dataIndex: 'conge',
        key: 'conge'
    },
    {
        title: 'Date début',
        dataIndex: 'debut',
        key: 'debut'
    },
    {
        title: 'Date fin',
        dataIndex: 'fin',
        key: 'fin'
    }
]
const columns2 = [
    {
        title: 'Employé',
        dataIndex: 'employe',
        key: 'employe',
        render: text =>
            <div><img className='avatar' src={pic} /> {text} </div>


    },
    {
        title: 'Duré ',
        dataIndex: 'conge',
        key: 'conge'
    },
    {
        title: 'Heure début',
        dataIndex: 'debut',
        key: 'debut'
    },
    {
        title: 'Heure fin',
        dataIndex: 'fin',
        key: 'fin'
    }
]


const data = [
    {
        employe: "Taoufik Baccar",
        conge: "5 jours",
        debut: "5 janvier 2022",
        fin: "10 janvier 2022"

    },
    {
        employe: "Taoufik Baccar",
        conge: "5 jours",
        debut: "5 janvier 2022",
        fin: "10 janvier 2022"

    }
    ,
    {
        employe: "Taoufik Baccar",
        conge: "5 jours",
        debut: "5 janvier 2022",
        fin: "10 janvier 2022"

    },
    {
        employe: "Taoufik Baccar",
        conge: "5 jours",
        debut: "5 janvier 2022",
        fin: "10 janvier 2022"

    },
    {
        employe: "Taoufik Baccar",
        conge: "5 jours",
        debut: "5 janvier 2022",
        fin: "10 janvier 2022"

    },
    {
        employe: "Taoufik Baccar",
        conge: "5 jours",
        debut: "5 janvier 2022",
        fin: "10 janvier 2022"

    }
]

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
        )}
    </Sticky>
);

const TestPage = () => {
    const { logoutUser } = useContext(AuthContext)

    const logout = () => {
        logoutUser();
    }
    return (
        <div>
            <div className="row">
                <div className='stat col-4'>
                    <h1 className='title2'>Résumé du jour</h1>
                    {/*<button onClick={logout}>Logout</button>*/}
                    <div className='list'>
                        <Card color="#5ef272" name="Nombre d'employés" icon={<UsergroupDeleteOutlined className='icon' />} value="80" />
                        <Card color="#FF8E2C" name="Nombre d'employés en congé" icon={<CalendarOutlined className='icon' />} value="80" />
                        <Card color="#5FA9F2" name="Les autorisations" icon={<ClockCircleOutlined className='icon' />} value="80" />
                    </div>
                </div>

                <div className='vue col-6'>
                    <div className='box'>
                        <h5 className='title3 ' >
                            Vue d'ensemble des congés et autorisations
                        </h5>
                        <StickyContainer  >
                            <Tabs tabPosition='top' defaultActiveKey="1" renderTabBar={renderTabBar} >
                                <TabPane
                                    tab="Employés en congés"
                                    key="1"
                                    style={{
                                        height: 150,
                                    }}
                                >
                                    <DataTable max_row={5} className='table' columns={columns1} data={data} />
                                </TabPane>
                                <TabPane tab="Les autorisations d'aujourdhui" key="2">
                                    <DataTable max_row={5} className='table' columns={columns2} data={data} />
                                </TabPane>
                                <TabPane tab="Prochain congés" key="3">
                                    <DataTable max_row={5} className='table' columns={columns1} data={data} />

                                </TabPane>
                            </Tabs>
                        </StickyContainer>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TestPage;