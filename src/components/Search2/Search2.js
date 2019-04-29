/* import _ from 'lodash'
import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class Search2 extends Component {
    componentWillMount() {
        this.resetComponent()
    }
    
    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(this.props.reduxState.movies.movieReducer.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                source: this.props.reduxState.movies.movieReducer.times(this.props.reduxState.movies.movieReducer.length, () => ({
                    title: this.props.reduxState.movies.movieReducer.title,
                    image: this.props.reduxState.movies.movieReducer.image_url,
                })),
                
                results: this.props.reduxState.movies.movieReducer.filter(source, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state
        const source = this.props.reduxState.movies.movieReducer.times(this.props.reduxState.movies.movieReducer.length, () => ({
            title: this.props.reduxState.movies.movieReducer.title,
            image: this.props.reduxState.movies.movieReducer.image_url,
        }))
        return (
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={this.props.reduxState.movies.movieReducer.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <Header>State</Header>
                        <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
                        <Header>Options</Header>
                        <pre style={{ overflowX: 'auto' }}>{JSON.stringify(source, null, 2)}</pre>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(Search2)); */
