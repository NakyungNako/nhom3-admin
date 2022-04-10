import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="smallWidget">
        <span className="smw-title">New Join Member</span>
        <ul className="smw-list">
            <li className="smw-listItem">
                <img 
                    src="https://images.unsplash.com/photo-1648692809415-59baa8dd27b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt=''
                    className='smw-image'
                />
                <div className="smw-user">
                    <span className="smw-userName">Bob Sinclair</span>
                    <span className="smw-userTitle">Software Engineer</span>
                </div>
                <button className="smw-button">
                    <Visibility fontSize='small' className='smw-icon'/>
                    Display
                </button>
            </li>
            <li className="smw-listItem">
                <img 
                    src="https://images.unsplash.com/photo-1648692809415-59baa8dd27b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt=''
                    className='smw-image'
                />
                <div className="smw-user">
                    <span className="smw-userName">Bob Sinclair</span>
                    <span className="smw-userTitle">Software Engineer</span>
                </div>
                <button className="smw-button">
                    <Visibility fontSize='small' className='smw-icon'/>
                    Display
                </button>
            </li>
            <li className="smw-listItem">
                <img 
                    src="https://images.unsplash.com/photo-1648692809415-59baa8dd27b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt=''
                    className='smw-image'
                />
                <div className="smw-user">
                    <span className="smw-userName">Bob Sinclair</span>
                    <span className="smw-userTitle">Software Engineer</span>
                </div>
                <button className="smw-button">
                    <Visibility fontSize='small' className='smw-icon'/>
                    Display
                </button>
            </li>
            <li className="smw-listItem">
                <img 
                    src="https://images.unsplash.com/photo-1648692809415-59baa8dd27b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt=''
                    className='smw-image'
                />
                <div className="smw-user">
                    <span className="smw-userName">Bob Sinclair</span>
                    <span className="smw-userTitle">Software Engineer</span>
                </div>
                <button className="smw-button">
                    <Visibility fontSize='small' className='smw-icon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
