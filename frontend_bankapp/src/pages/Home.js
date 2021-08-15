import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import AccountDetail from './AccountDetail';
// to pass the information to my component when it clicked:
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedAccount: null,
            isLoaded: false,
            checkingAccounts: [],
            cdAccounts: []
        }
    }

    //gets loaded every time page loaded
    componentDidMount= async () => {
        // async () => {

        let url = 'Me';
        const h = new Headers();
        let jwt = sessionStorage.getItem('jwt');
        h.append('Authorization', 'Bearer ' + JSON.parse(jwt));

        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: h,
        };

        await fetch(new Request(url, requestOptions))
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                const checkAccounts = response.checkingAccounts;
                const cDAccounts = response.cdaccounts; 

                this.setState({
                    checkingAccounts: response.checkingAccounts, 
                    cdAccounts: response.cdaccounts,
                    isLoaded: true
                });
                console.log("Log cdaccounts " + cDAccounts);
                console.log("Log checkAccounts " + checkAccounts);
                console.log("Log state cdaccounts " + this.state.cdAccounts);
                console.log("Log state checkAccounts " + this.state.checkingAccounts);
            })
            .catch(err => {
                console.error(err.message);
                throw err;
            })
        // }
    }

    onAccountSelect(account) {
        this.setState({ selectedAccount: account });
        // console.log('accountId = ' + accountId)
        // console.log('this.state.selectedAccount = ' + this.state.selectedAccount)

        // const accountN = this.state.checkingAccounts.find((account) => { return account.accountNumber < this.state.selectedAccount})
        // console.log('accountN = ' + accountN)
        // const accountM = this.state.checkingAccounts.map((account) => { return account.accountNumber})
        // console.log('accountM= ' + accountM)
        // this.state.checkingAccounts.filter((account) => {console.log(account.accountNumber === this.state.selectedAccount)})
    }


    renderAccount(account) {
        // console.log("In renderAccount");
        if (account != null) {
            return (
                // <Card onClick={() => onClick(account.accountNumber)}>
                <Card>
                    <Link to={`/home/${account.accountNumber}`} >
                        <CardBody>
                            <CardTitle>Personal Checking: </CardTitle>
                            <CardText>  (xxxx000{account.accountNumber}) </CardText>
                        </CardBody>
                    </Link>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        console.log("In render");
        const home = this.state.cdAccounts;  
        console.log("home = " + home);

        if (!this.state.isLoaded) {
            return <div>Loading ...</div>
        }
        else {
            if (home) {
                return (

                    home.map(account => (


                        // return (
                        <div key={account.accountNumber} className="col-12 col-md-5 m-1">
                            <Card onClick={() => this.onAccountSelect(account)}>
                                <CardBody>
                                    <CardTitle>CD Account: </CardTitle>
                                    <CardText>  (xxxx000{account.accountNumber}) </CardText>
                                    <CardText>Balance: {account.balance}) </CardText>
                                </CardBody>
                                {/* <RenderAccountItem account={account} onClick={props.onClick} /> */}
                                {/* <RenderAccountItem account={account} /> */}
                                {/* {this.renderAccount(account)} */}
                            </Card>
                        </div>
                    ))

                )
            }
        }

        // }
        // Array.isArray(this.state.cdAccounts) && this.state.cdAccounts.map((account) => {

        //     return (
        //         <div key={account.accountNumber} className="col-12 col-md-5 m-1">
        //             <Card onClick={() => this.onAccountSelect(account)}>
        //                 {/* <RenderAccountItem account={account} onClick={props.onClick} /> */}
        //                 {/* <RenderAccountItem account={account} /> */}
        //                 {/* {this.renderAccount(account)} */}
        //             </Card>
        //         </div>
        //     );
        // })
        // }
        return (
            <div className="container" >
                <div className="row">
                    <Breadcrumb>
                        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>Accounts</h3>
                        {/* //gives a line */}
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {home}
                </div>
                <div className="row">
                    <AccountDetail accSelected={this.state.selectedAccount} />
                </div>
            </div>
        );
    }
    // }

    // const home = this.props.checkingAccounts.map((account) => {
    //     return (
    //         <div className="col-12 col-md-5 m-5">
    //             {/* <Card key={account.accountNumber} onClick={() => this.onAccountSelect(account)}> */}
    //             {/* <Card key={account.accountNumber} onClick={() => this.props.onClick(account.accountNumber)}>
    //                         <CardImgOverlay>
    //                             <CardBody>
    //                                 <CardTitle>Personal Checking: </CardTitle>
    //                                 <CardText>  (xxxx000{account.accountNumber}) </CardText>
    //                             </CardBody>
    //                         </CardImgOverlay>
    //                     </Card> */}
    //         </div>
    //     );
    // })


    // return (
    //     <div className="container" >
    //         <div className="row">
    //             {home}
    //         </div>
    //         <div className="row">
    //             {/* <div className="col-12 col-md-5 m-5">
    //                         <AccountDetail selectedAccount={this.state.selectedAccount} />
    //                     </div> */}
    //         </div>
    //     </div>
    // );
    //     }
}

export default Home;