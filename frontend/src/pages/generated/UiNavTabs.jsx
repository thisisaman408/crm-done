import React from 'react';

const UiNavTabs = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ui-nav-tabs.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Tabs</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="ui-nav-tabs.html#">Base UI</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tabs</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                {/* start row */}
                <div className="row">

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Default Tabs</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs mb-3">
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#home" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#profile" data-bs-toggle="tab" aria-expanded="true"
                                            className="nav-link active">
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#message" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                            Settings
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#" data-bs-toggle="tab" aria-expanded="false"
                                            className="nav-link disabled">
                                            Disabled
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" id="home">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane show active" id="profile">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="message">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Tabs Justified</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#home2" data-bs-toggle="tab" aria-expanded="false"
                                            className="nav-link rounded-0">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#profile2" data-bs-toggle="tab" aria-expanded="true"
                                            className="nav-link rounded-0 active">
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#messages2" data-bs-toggle="tab" aria-expanded="false"
                                            className="nav-link rounded-0">
                                            Settings
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" id="home2">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane show active" id="profile2">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="messages2">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates. </p>
                                    </div>
                                </div>

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Solid Tabs</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-solid-primary mb-3">
                                    <li className="nav-item"><a className="nav-link active" href="ui-nav-tabs.html#solid-tab1"
                                            data-bs-toggle="tab">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-tab2"
                                            data-bs-toggle="tab">Profile</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-tab3"
                                            data-bs-toggle="tab">Messages</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="solid-tab1">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-tab2">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-tab3">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>
                            </div> {/* end card body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Solid Justified</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-solid-primary nav-justified mb-3">
                                    <li className="nav-item"><a className="nav-link active" href="ui-nav-tabs.html#solid-justified-tab1"
                                            data-bs-toggle="tab">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-justified-tab2"
                                            data-bs-toggle="tab">Profile</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-justified-tab3"
                                            data-bs-toggle="tab">Messages</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="solid-justified-tab1">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab2">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab3">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>
                            </div> {/* end card body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Solid Rounded</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-solid-success nav-tabs-rounded mb-3">
                                    <li className="nav-item"><a className="nav-link active" href="ui-nav-tabs.html#solid-rounded-tab1"
                                            data-bs-toggle="tab">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-rounded-tab2"
                                            data-bs-toggle="tab">Profile</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-rounded-tab3"
                                            data-bs-toggle="tab">Messages</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="solid-rounded-tab1">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-rounded-tab2">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-rounded-tab3">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>
                            </div> {/* end card body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Rounded Justified</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-solid-success nav-tabs-rounded nav-justified mb-3">
                                    <li className="nav-item"><a className="nav-link active" href="ui-nav-tabs.html#solid-rounded-justified-tab1"
                                            data-bs-toggle="tab">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-rounded-justified-tab2"
                                            data-bs-toggle="tab">Profile</a></li>
                                    <li className="nav-item"><a className="nav-link" href="ui-nav-tabs.html#solid-rounded-justified-tab3"
                                            data-bs-toggle="tab">Messages</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="solid-rounded-justified-tab1">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-rounded-justified-tab2">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="solid-rounded-justified-tab3">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>
                            </div> {/* end card body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Tabs Bordered</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-bordered mb-3">
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#home-b1" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                            <span className="d-md-inline-block">Home</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#profile-b1" data-bs-toggle="tab" aria-expanded="true"
                                            className="nav-link active">
                                            <span className="d-md-inline-block">Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#messages-b1" data-bs-toggle="tab" aria-expanded="false"
                                            className="nav-link">
                                            <span className="d-md-inline-block">Messages</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" id="home-b1">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane show active" id="profile-b1">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="messages-b1">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Tabs Bordered Justified</h5>
                            </div>

                            <div className="card-body">
                                <ul className="nav nav-tabs nav-justified nav-bordered nav-bordered-success mb-3">
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#home-b2" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                            <span className="d-md-inline-block">Home</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#profile-b2" data-bs-toggle="tab" aria-expanded="true"
                                            className="nav-link active">
                                            <span className="d-md-inline-block">Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="ui-nav-tabs.html#messages-b2" data-bs-toggle="tab" aria-expanded="false"
                                            className="nav-link">
                                            <span className="d-md-inline-block">Messages</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" id="home-b2">
                                        <p className="mb-0">Welcome to the dashboard! Access key metrics, recent updates,
                                            and quick links to manage your activity. Use this panel to stay on top of
                                            your workflow and performance goals.</p>
                                    </div>
                                    <div className="tab-pane show active" id="profile-b2">
                                        <p className="mb-0">Manage your profile details, update your contact info, and
                                            review your login activity. Keeping your account information accurate
                                            ensures a smooth and secure experience.</p>
                                    </div>
                                    <div className="tab-pane" id="messages-b2">
                                        <p className="mb-0">View recent messages, send new replies, and stay connected with
                                            your team. The messaging center helps you manage conversations efficiently
                                            and never miss important updates.</p>
                                    </div>
                                </div>

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Tabs Vertical Left</h5>
                            </div>
                            <div className="card-body">

                                {/* start row */}
                                <div className="row">
                                    <div className="col-sm-3 mb-2 mb-sm-0">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                            aria-orientation="vertical">
                                            <a className="nav-link active show" id="v-pills-home-tab" data-bs-toggle="pill"
                                                href="ui-nav-tabs.html#v-pills-home" role="tab" aria-controls="v-pills-home"
                                                aria-selected="true">
                                                Home
                                            </a>
                                            <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                                href="ui-nav-tabs.html#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                                aria-selected="false">
                                                Profile
                                            </a>
                                            <a className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                                href="ui-nav-tabs.html#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                                aria-selected="false">
                                                messages
                                            </a>
                                        </div>
                                    </div> {/* end col */}

                                    <div className="col-sm-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade active show" id="v-pills-home" role="tabpanel"
                                                aria-labelledby="v-pills-home-tab">
                                                <p className="mb-0">Welcome to the dashboard! Access key metrics, recent
                                                    updates, and quick links to manage your activity. Use this panel to
                                                    stay on top of your workflow and performance goals.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                                aria-labelledby="v-pills-profile-tab">
                                                <p className="mb-0">Manage your profile details, update your contact info,
                                                    and review your login activity. Keeping your account information
                                                    accurate ensures a smooth and secure experience.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                                aria-labelledby="v-pills-messages-tab">
                                                <p className="mb-0">View recent messages, send new replies, and stay
                                                    connected with your team. The messaging center helps you manage
                                                    conversations efficiently and never miss important updates.</p>
                                            </div>
                                        </div> {/* end tab-content*/}
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Tabs Vertical Right</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="tab-content" id="v-pills-tabContent-right">
                                            <div className="tab-pane fade active show" id="v-pills-home2" role="tabpanel"
                                                aria-labelledby="v-pills-home-tab">
                                                <p className="mb-0">Welcome to the dashboard! Access key metrics, recent
                                                    updates, and quick links to manage your activity. Use this panel to
                                                    stay on top of your workflow and performance goals.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-profile2" role="tabpanel"
                                                aria-labelledby="v-pills-profile-tab">
                                                <p className="mb-0">Manage your profile details, update your contact info,
                                                    and review your login activity. Keeping your account information
                                                    accurate ensures a smooth and secure experience.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-messages2" role="tabpanel"
                                                aria-labelledby="v-pills-messages-tab">
                                                <p className="mb-0">View recent messages, send new replies, and stay
                                                    connected with your team. The messaging center helps you manage
                                                    conversations efficiently and never miss important updates.</p>
                                            </div>
                                        </div> {/* end tabcontent*/}
                                    </div> {/* end col */}

                                    <div className="col-sm-3 mt-2 mt-sm-0">
                                        <div className="nav flex-column nav-pills nav-pills-secondary" id="v-pills-tab2"
                                            role="tablist" aria-orientation="vertical">
                                            <a className="nav-link active show" id="v-pills-home-tab2" data-bs-toggle="pill"
                                                href="ui-nav-tabs.html#v-pills-home2" role="tab" aria-controls="v-pills-home2"
                                                aria-selected="true">
                                                <span className="d-md-inline-block">Home</span>
                                            </a>
                                            <a className="nav-link" id="v-pills-profile-tab2" data-bs-toggle="pill"
                                                href="ui-nav-tabs.html#v-pills-profile2" role="tab" aria-controls="v-pills-profile2"
                                                aria-selected="false">
                                                <span className="d-md-inline-block">Profile</span>
                                            </a>
                                            <a className="nav-link" id="v-pills-messages-tab2" data-bs-toggle="pill"
                                                href="ui-nav-tabs.html#v-pills-messages2" role="tab" aria-controls="v-pills-messages2"
                                                aria-selected="false">
                                                <span className="d-md-inline-block">Messages</span>
                                            </a>
                                        </div>
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default UiNavTabs;
