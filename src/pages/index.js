import React from "react"
import "../styles/index.scss"
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div>
    <Helmet>
      <title>Incorpus Header-Footer test</title>
      {/* line awesome icon cdn */}
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
    </Helmet>
    <Header />
    <div className="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam, amet deserunt laudantium non architecto mollitia tenetur quo, placeat error suscipit, illo fugiat. Et quae nihil, iste perspiciatis assumenda. Culpa!</p>
    </div>
    <Footer />
  </div>
)
