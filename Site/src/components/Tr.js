import React, {useState} from "react";


const Tr = ({site, idx, updateList}) => {
    const [color, setColor] = useState('transparent')

    const clickOpen = () => {
        window.open(`https://web.archive.org/web/20241001000000*/${site}`, '_blank');
    }

    const clickOpenMap = () => {
        window.open(`https://yandex.com/maps/?ll=10.854186%2C49.182076&mode=search&sll=10.854186%2C49.182076&sspn=84.023438%2C32.394546&text=${site}&z=4`, '_blank');
    }

    const remove = (s) => {
        setColor('red')
        fetch('http://localhost:8484/api/deleteSite', {
            method: 'POST',
            body: JSON.stringify({site}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.res) {
                    updateList(s)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <tr style={{backgroundColor: color}}>
            <td>{idx + 1}</td>
            <td style={styles.siteName}>{site}</td>
            <td>
                <div style={styles.openBtn} onClick={clickOpenMap}>Открыть Карту</div>
            </td>
            <td>
                <div style={styles.openBtn} onClick={() => remove(site)}>Удалить</div>
            </td>
            <td>
                <div style={styles.openBtn} onClick={clickOpen}>Открыть Webarchive</div>
            </td>
        </tr>)
}

const styles = {
    openBtn: {
        borderColor: 'grey',
        borderWidth: 2,
        backgroundColor: 'silver',
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    siteName: {
        width: 500
    }
}

export default Tr
