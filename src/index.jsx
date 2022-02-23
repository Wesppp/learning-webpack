import '@babel/polyfill'
import * as $ from'jquery'
import Post from './Post'
import WebpackLogo from './assets/webpack-logo'
import React from 'react'
import { render } from 'react-dom'
import './styles/style.css'
import './styles/scss.scss'
import './babel'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import json from './assets/json'

const post = new Post('Post title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

const App = () => (
    <div class="container">
    <h1>Webpack Course</h1>
    <hr />
    <div class="logo" />
    <hr />
    <pre />
    <div class="card">
       <h2>It is SCSS</h2>
    </div>
</div>
)

render(<App />, document.getElementById('app'))