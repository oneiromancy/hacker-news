import React, { Component } from "react";
import queryString from "query-string";
import fetchApiByPathname from "../utils/api/fetchApiByPathname";

import Loading from "../components/loading/Loading";

const withItemData = WrappedComponent =>
    class extends Component {
        state = {
            data: [],
            isLoading: true
        };

        componentDidMount = () => {
            this.requestData();
        };

        requestData = () => {
            const { id } = queryString.parse(this.props.location.search);
            const { tag, fetchFn } = fetchApiByPathname[
                this.props.location.pathname
            ];

            fetchFn(tag, id).then(response => {
                this.setState({
                    data: response,
                    isLoading: false
                });
            });
        };

        render() {
            return this.state.isLoading ? (
                <Loading />
            ) : (
                <section>
                    <WrappedComponent
                        data={this.state.data}
                        isLoading={this.state.isLoading}
                        {...this.props}
                    />
                </section>
            );
        }
    };

export default withItemData;
