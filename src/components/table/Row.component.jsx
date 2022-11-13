export const Row = ({ rowData, isHeader }) => {

    const simpleObjectData = rowData && Object.keys(rowData).reduce((prev, currKey) => {
        const simpleValue =
            typeof (rowData[currKey]) !== 'object' && { [currKey]: rowData[currKey] }
        
        return {
            ...prev,
            ...(simpleValue || rowData[currKey])
        }
    }, {})

    return (
        <tr >
            {
                rowData && Object.keys(simpleObjectData).map((userDataKey, i) => (
                    isHeader
                        ?
                    <th key={i}>{userDataKey}</th>
                        :
                    <td key={i}>{ simpleObjectData[userDataKey]}</td>
                ))
            }
        </tr >
    )
}