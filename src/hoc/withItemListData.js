import React, { Component } from 'react';
import queryString from 'query-string';
import fetchApiByPathname from '../utils/api/fetchApiByPathname';
import Loading from '../components/loading/Loading';
import NextPageLink from '../components/nextPageLink/NextPageLink';

const withItemListData = (WrappedComponent) => class extends Component {

    state = {
        data: [],
        currentPage: 0,
        isLoading: true,
        showNextPageLink: true
    }

    componentDidMount = () => {
        this.requestData();
    }

    requestData = () => {

        const pathname = this.props.location.pathname;
        const {tag, fetchFn} = fetchApiByPathname[pathname];

        const {page, id} = queryString.parse(this.props.location.search);
        const pageRequest = isNaN(page)? 0: parseInt(page);

        fetchFn(tag, pageRequest, id)
        .then( response => {

            if(response.hits.length > 0){
                
                this.setState({
                    data: response.hits, 
                    currentPage: pageRequest,
                    isLoading: false
    
                })

            } else {
                this.setState({
                    isLoading: false,
                    showNextPageLink: false
                })
            }
        
        });

    }

    nextPage = () => {

        this.setState(prevState => ({ 
            currentPage: prevState.currentPage + 1,
            isLoading: true
        }), this.requestData);

    }

    render() {
        return (
            this.state.isLoading?
            <Loading/>:
            <section>
                <WrappedComponent  
                    data = {this.state.data}
                    isLoading = {this.state.isLoading}
                    currentPage = {this.state.currentPage}
                    nextPage = {this.nextPage}
                />
                {
                    this.state.showNextPageLink &&
                    <NextPageLink
                        nextPage = {this.nextPage}
                        currentPage = {this.state.currentPage}
                        query = {queryString.parse(this.props.location.search)}
                    />
                }
            </section>
        )
    }
}

export default withItemListData;