import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DropdownComponent = () => {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }

    useEffect(() => {
        let path = window.location.pathname;
        setCurrentPage(path);
    }, [window.location.pathname])
      
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Menu Item #1</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li className={currentPage === '/page-a'?'active': ''} onClick={() => handleClick('/page-a')}>page - a</li>
                        <li className={currentPage === '/page-b'?'active': ''} onClick={() => handleClick('/page-b')}>page - b</li>
                        <li className={currentPage === '/page-c'?'active': ''} onClick={() => handleClick('/page-c')}>page - c</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Menu Item #2</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li className={currentPage === '/page-d'?'active': ''} onClick={() => handleClick('/page-d')}>page - d</li>
                        <li className={currentPage === '/page-e'?'active': ''} onClick={() => handleClick('/page-e')}>page - e</li>
                        <li className={currentPage === '/page-f'?'active': ''} onClick={() => handleClick('/page-f')}>page - f</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export { DropdownComponent }