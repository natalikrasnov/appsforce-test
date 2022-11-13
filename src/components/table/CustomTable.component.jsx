import {Row} from './Row.component'
export function CustomTable({ data }) {

    return (
        <table className="custom-table">
            <thead>
                <Row rowData={data[0]} isHeader/>
            </thead>
            {data && data.map((el, index) => (
                index > 0 &&
                <tbody key={index} >
                    <Row rowData={el} />
                </tbody>
            ))}
        </table>
    )
}