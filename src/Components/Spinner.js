import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <div class="d-flex justify-content-center ">

                    <div class="spinner-grow spinner-grow-sm mx-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow spinner-grow-sm mx-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow spinner-grow-sm mx-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}
