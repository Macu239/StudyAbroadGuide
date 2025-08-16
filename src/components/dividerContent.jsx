import style from './dividerContent.module.css';

export default function DividerContent({ order, title, content }) {
    return (
        <div className={style.sectionWrapper}>
            <div className={style.topicbar}>
                <div className={style.dividerContentTitle}>
                    {order}、<strong>{title}</strong>
                </div>
                <div className={style.dividerContentDivider} />
            </div>
            <div className={style.dividerContentText}>
                {content}
            </div>
        </div>
    );
}
