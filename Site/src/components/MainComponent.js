import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Tr from './Tr'


function MainComponent() {
    const [siteList, setSiteList] = useState([])
    const [bigInput, setBigInput] = useState('')

    const updateList = () => {
        fetch('http://localhost:8888/api/fullSiteList', {
            method: 'POST',
            body: JSON.stringify({bigInput}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setSiteList(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        updateList()
    }, [bigInput])


    const renderTr = () => {
        return siteList.map((site, idx) => (
            <Tr
                key={site}
                site={site}
                idx={idx}
                updateList={updateList}
            />
        ))
    }


    return (
        <div>
            <div>Список сайтов</div>
            <input
                placeholder={'Sites'}
                style={styles.bigInput}
                type={'text'}
                value={bigInput}
                onInput={(e) => setBigInput(e.target.value)}/>


            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Site</th>
                    <th>Открыть</th>
                    <th>Удалить</th>
                    <th>Add DNS</th>
                    <th>DNS Servers</th>
                </tr>
                </thead>
                <tbody>
                {renderTr()}
                </tbody>
            </Table>
        </div>
    );
}

const styles = {
    input: {
        width: 500,
        display: 'block',
        border: '1px solid grey',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    bigInput: {
        width: '98%',
        display: 'block',
        border: '1px solid grey',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default MainComponent;
