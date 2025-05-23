import PremiumToolsCard from '@/components/PremiumToolsCard/PremiumToolsCard';
import style from './tools.module.css'
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const Tools = () => {
    return (
        <section className={style.tools_service}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-7">
                        <h2 className={style.section_tagline}><TfiLayoutLineSolid className={style.section_tagline_icon} /> Premium Tools</h2>
                        <h2 className={style.section_title}>Premium <span className={style.section_title_color}> account subscription </span> with exclusive price.</h2>
                    </div>
                </div>
                <div className="row">
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                    <PremiumToolsCard />
                </div>
            </div>
        </section>
    )
}

export default Tools