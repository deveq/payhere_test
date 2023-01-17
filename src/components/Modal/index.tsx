import {useState} from 'react';
import {createPortal} from 'react-dom';
import * as Styled from './styles';

const Modal = () => {
    const [showModal, setShowModal] = useState(true);
    return (
        // <Styled.Container>aaa</Styled.Container>
        <>
            {
                showModal && (
                    createPortal(
                        <>
                            <Styled.Background />
                            <div>모달</div>
                        </>,
                        document.querySelector('#root-modal') as HTMLDivElement,
                    )
                )
            }
        </>
    )
}

export default Modal;