<div className="col-lg-6 col-md-12">
    <div className="card">
        <div className="card-header card-header-tabs card-header-primary">
            <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                    <span className="nav-tabs-title">Tasks:</span>
                    <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#profile" data-toggle="tab">
                                <i className="material-icons">bug_report</i> Bugs
                                  <div className="ripple-container" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#messages" data-toggle="tab">
                                <i className="material-icons">code</i> Website
                                  <div className="ripple-container" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#settings" data-toggle="tab">
                                <i className="material-icons">cloud</i> Server
                                  <div className="ripple-container" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="tab-content">
                <div className="tab-pane active" id="profile">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                            <span className="form-check-sign">
                                                <span className="check" />
                                            </span>
                                        </label>
                                    </div>
                                </td>
                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                        <i className="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>