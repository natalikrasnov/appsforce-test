import strings from "../../utils/Strings.json"

export function Header({ title }) {
    return (
        <div className="header">
            <label className="header_title"> {title} </label>

            <label className="company_name">{ strings["company_name"]}</label>
        </div>
    )
}