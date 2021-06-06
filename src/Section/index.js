import "./style.css";
import "./global.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <div className="container">
    <section className="section__listHeader">
        <h2 className="section__header">{title}</h2>
        {extraHeaderContent}
    </section>
    <section className="section_List">
        {body}
    </section>
    </div>
)

export default Section;