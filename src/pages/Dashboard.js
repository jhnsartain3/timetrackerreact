import React, {Component} from "react";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={'row'}>
                    <div className={'col-3'}>
                        <p>Section 1</p>
                    </div>
                    <div className={'col-3'}>
                        <p>Section 2</p>
                    </div>
                    <div className={'col-3'}>
                        <p>Section 3</p>
                    </div>
                    <div className={'col-3'}>
                        <p>Section 4</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;