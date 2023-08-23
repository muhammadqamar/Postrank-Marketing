// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, HeadFC } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import HomePage from "../components/HomePage/home"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <Layout>
    <HomePage />
  </Layout>
)

export const Head: HeadFC<DataProps> = () => (
  <Seo title="Postrank" description={"gatsyby"} children={undefined} />
)

export default IndexPage
