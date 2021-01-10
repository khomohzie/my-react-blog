import React from 'react'

const Form = () => {
    return (
        <div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <fieldset className="form-group">
                        <label htmlFor="subtitle" className="col-form-label create">Subtitle</label>
                        <input type="text" className="form-control" name="subtitle" id="subtitle" placeholder="Subtitle" />
                        <small>If applicable</small>
                    </fieldset>

                    <label htmlFor="image" className="col-form-label create">Image?</label>

                    <div class="custom custom-file">
                        <input multiple="" type="file" class="custom-file-input" name="Image" />
                        <label class="custom-file-label">
                            Click to open file browser
                            </label>
                    </div>
                    <small>If applicable</small>
                </div>
                <div className="col-12 col-md-8">
                    <fieldset className="form-group">
                        <label htmlFor="content" className="col-form-label create">Content</label>
                        <textarea className="form-control" rows="10" name="content" id="content" placeholder="Content"></textarea>
                    </fieldset>
                </div>
            </div>

        </div>
    )
}

export default Form
