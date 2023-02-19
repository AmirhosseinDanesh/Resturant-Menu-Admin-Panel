import ReactDOM from 'react-dom'

import "./DeleteModal.css"
export default function DeleteModal() {
    return ReactDOM.createPortal (
        <div className="modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">آیا از حذف اطمینان دارید؟</h5>
                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                            <span className='close-modal' aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">بله</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">خیر</button>
                    </div>
                </div>
            </div>
        </div>
        , document.querySelector("#modal-parent")
    )
}
