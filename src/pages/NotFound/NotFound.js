import { Button, Result } from "antd";
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const NotFound = () => {
    return (
        <div className={styles.notFoundPage}>
            <Result>
                <span className="error_text"> status='404' <br></br>
                title='404' <br></br>
                subTitle='Page could not be found or you don't have permission'
                 <br></br></span>
               {
                    <Button type="primary" className="btn_sUp">
                        <Link to='/'>Sign Up</Link>
                    </Button>
                }
            </Result>
        </div>
    );
};