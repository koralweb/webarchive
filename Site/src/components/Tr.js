import React from "react";


const Tr = ({site, idx, updateList}) => {

    const clickOpen = () => {
        window.open(` https://web.archive.org/web/20241001000000*/${site}`, '_blank');
    }

    const remove = () => {
        fetch('http://localhost:8888/api/deleteSite', {
            method: 'POST',
            body: JSON.stringify({site}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.res) {
                    updateList()
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{site}</td>
            <td>
                <div style={styles.openBtn} onClick={clickOpen}>Открыть</div>
            </td>
            <td>
                <div style={styles.openBtn} onClick={remove}>Удалить</div>
            </td>
            <td>

            </td>
            <td></td>
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
    }
}

export default Tr
