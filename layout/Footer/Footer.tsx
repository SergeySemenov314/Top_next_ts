import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import {format} from 'date-fns'

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
    return (
        <div className={cn(className, styles.footer)} {...props}>
            <div className={styles.copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <a href="/" className={styles.personal}>Пользовательское соглашение</a>
            <a href="/" className={styles.confidential}>Политика конфиденциальности</a>
        </div>
    );
};
