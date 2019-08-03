import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { TimelineLite } from "gsap"

import "./layout.css"
import Header from "../components/header/header"
import Menu from "../components/menu/menu"
import Social from "../components/social/social"
import ContactList from "../components/contact-list/contact-list"

//cubes for animation
import CubeLg from "./../images/icons/cube-xl.svg"
import CubeMd from "./../images/icons/cube-md.svg";
import CubeSm from "./../images/icons/cube-sm.svg";
import CubeSmRotate from "./../images/icons/cube-sm-rotate.svg";

class Layout extends PureComponent {
  constructor(props) {
    super(props)
    this._cubeXL = null;
    this._cubeLG = null
    this._cubeMD = null;
    this._cubeSM = null;
    this._cubeSMRotate = null;
    this._cubeSMRotate1 = null;
    this._cubeSMRotate2 = null;
    this.mytimeLineCubes = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.mytimeLineCubes
      .from(this._cubeXL, .5, {scale: 0, y: 0.40 * windowHeight, x: 0.78 * windowWidth,})
      .from(this._cubeXL, 100, {repeat:-1, yoyo: true})
      .to(this._cubeXL, 100, {x: 0.10 * windowHeight, y: 0,  repeat:-1, yoyo: true}, 0)
      .from(this._cubeMD, .5, {scale: 0, y: 0.36 * windowHeight, x: 0.69 * windowWidth}, "-=100")
      .from(this._cubeMD, 90, {repeat:-1, yoyo: true}, "-=100")
      .to(this._cubeMD, 90, {x: 0.28 * windowWidth, y: 0.90 * windowHeight,  repeat:-1, yoyo: true}, 0)
      .from(this._cubeLG, .5, {scale: 0},"-=90")
      .from(this._cubeLG, 80, {repeat: -1, y: 0.8 * windowHeight, x: 0.5 * windowWidth, yoyo: true}, "-=90")
      .to(this._cubeLG, 80, {x: windowWidth, y: 0.90 * windowHeight,  repeat:-1, yoyo: true}, 0)
      .from(this._cubeSM, .5, {scale: 0},"-=80")
      .from(this._cubeSM, 60, {repeat: -1, y: 0.2 * windowHeight, x: 0.9 * windowWidth, yoyo: true}, "-=64")
      .to(this._cubeSM, 60, {x: 0.1 * windowWidth, y: 0.9* windowHeight,  repeat:-1, yoyo: true}, 0)
      .from(this._cubeSMRotate, .5, {scale: 0},"-=60")
      .from(this._cubeSMRotate, 60, {repeat: -1, y: 0.1 * windowHeight, x: 0.2 * windowWidth, yoyo: true}, "-=64")
      .to(this._cubeSMRotate, 60, {x: 0.9 * windowWidth, y: 0.9 * windowHeight,  repeat:-1, yoyo: true}, 0)
      .from(this._cubeSMRotate1, .5, {scale: 0},"-=60")
      .from(this._cubeSMRotate1, 60, {repeat: -1,  x: windowWidth, yoyo: true}, "-=64")
      .to(this._cubeSMRotate1, 60, {x: 0.9 * windowWidth, y: 0.1 * windowHeight,  repeat:-1, yoyo: true}, 0)
      .from(this._cubeSMRotate2, .5, {scale: 0},"-=60")
      .from(this._cubeSMRotate2, 60, {repeat: -1, y: 0.6 * windowHeight, x: 0.9 * windowWidth, yoyo: true}, "-=64")
      .to(this._cubeSMRotate2, 60, {x: 0.9 * windowWidth, y: 0.9 * windowHeight,  repeat:-1, yoyo: true}, 0)
      .play();
  }

  render() {
    const { children, uri } = this.props
    return (
      <>
        <div className={`cube cube--xl`} ref={cubeLg => this._cubeXL = cubeLg}><CubeLg /></div>
        <div className={`cube cube--md`} ref={cubeMd => this._cubeMD = cubeMd}><CubeMd /></div>
        <div className={`cube cube--lg`} ref={cubeLG => this._cubeLG = cubeLG}><CubeMd /></div>
        <div className={`cube cube--sm`} ref={cubeSM => this._cubeSM = cubeSM}><CubeSm /></div>
        <div className={`cube cube--sm cube--rotate`} ref={cubeSMRotate => this._cubeSMRotate = cubeSMRotate}><CubeSmRotate /></div>
        <div className={`cube cube--sm`} ref={cubeSM => this._cubeSMRotate1 = cubeSM}><CubeSm /></div>
        <div className={`cube cube--sm cube--rotate`} ref={cubeSM => this._cubeSMRotate2 = cubeSM}><CubeSm /></div>

        <div className="container">
          <div className="wrapper">
            <Header/>
            <main>
              <div className="layout">
                <div className="layout__row">
                  <div className="layout__col layout__col--nav">
                    <Menu/>
                  </div>
                  <div className="layout__col">
                    {children}
                  </div>
                </div>
                <div
                  className={`layout__footer ${uri === `/contacts` || uri === `/success-sent` ? `layout__footer--page-contact` : ``}`}>
                  <div className="layout__social">
                    <Social/>
                  </div>
                  {uri === `/contacts` ? <ContactList/> : null}
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
