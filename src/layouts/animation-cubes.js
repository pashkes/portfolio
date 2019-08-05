import React, { PureComponent } from "react";
import { TimelineLite } from "gsap";

import CubeLg from "../images/icons/cube-xl.svg";
import CubeMd from "../images/icons/cube-md.svg";
import CubeSm from "../images/icons/cube-sm.svg";
import CubeSmRotate from "../images/icons/cube-sm-rotate.svg";

class AnimationCubes extends PureComponent {
  constructor(props) {
    super(props)
    this._cubeXL = null
    this._cubeLG = null
    this._cubeMD = null
    this._cubeSM = null
    this._cubeSMRotate = null
    this._cubeSMRotate1 = null
    this._cubeSMRotate2 = null
    this._mytimeLineCubes = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    const widthV = window.innerWidth
    const heightV = window.innerHeight
    this._mytimeLineCubes
      .from(this._cubeXL, .3, { opacity: 0 })
      .from(this._cubeXL, 80, { repeat: -1, y: 0.70 * heightV, x: 0.78 * widthV, yoyo: true })
      .to(this._cubeXL, 80, { x: 0.90 * widthV, y: 0.4 * heightV, repeat: -1, yoyo: true }, 0)
      .from(this._cubeMD, .3, { opacity: 0 }, "-=80")
      .from(this._cubeMD, 90, { repeat: -1, y: 0.36 * heightV, x: 0.69 * widthV, yoyo: true }, "-=80")
      .to(this._cubeMD, 90, { x: 0.28 * widthV, y: 0.90 * heightV, repeat: -1, yoyo: true }, 0)
      .from(this._cubeLG, .3, { opacity: 0 }, "-=90")
      .from(this._cubeLG, 80, { repeat: -1, y: 0.8 * heightV, x: 0.5 * widthV, yoyo: true }, "-=90")
      .to(this._cubeLG, 80, { x: 0.95 * widthV, y: 0.90 * heightV, repeat: -1, yoyo: true }, 0)
      .from(this._cubeSM, .3, { opacity: 0 }, "-=90")
      .from(this._cubeSM, 40, { repeat: -1, y: 0.2 * heightV, x: 0.9 * widthV, yoyo: true }, "-=90")
      .to(this._cubeSM, 40, { x: 0.1 * widthV, y: 0.9 * heightV, repeat: -1, yoyo: true }, 0)
      .from(this._cubeSMRotate, .3, { opacity: 0 }, "-=40")
      .from(this._cubeSMRotate, 40, { repeat: -1, y: 0.5 * heightV, x: 0.2 * widthV, yoyo: true }, "-=40")
      .to(this._cubeSMRotate, 40, { x: 0.9 * widthV, y: 0.9 * heightV, repeat: -1, yoyo: true }, 0)
      .from(this._cubeSMRotate1, .3, { opacity: 0 }, "-=40")
      .from(this._cubeSMRotate1, 40, { repeat: -1, x: widthV, yoyo: true }, "-=60")
      .to(this._cubeSMRotate1, 40, { x: 0.9 * widthV, y: 0.1 * heightV, repeat: -1, yoyo: true }, 0)
      .from(this._cubeSMRotate2, 60, { repeat: -1, y: 0.6 * heightV, x: 0.9 * widthV, yoyo: true }, "-=40")
      .to(this._cubeSMRotate2, 60, { x: 0.9 * widthV, y: 0.9 * heightV, repeat: -1, yoyo: true }, 0)
      .play()
  }

  render() {
    const isAnimStated = this._mytimeLineCubes.isActive();
    return (
      <>
        <div className={`cube cube--xl ${isAnimStated ? `is-hidden` : ``}`} ref={cubeLg => this._cubeXL = cubeLg} aria-hidden={true}><CubeLg/></div>
        <div className={`cube cube--md ${isAnimStated ? `is-hidden` : ``}`} ref={cubeMd => this._cubeMD = cubeMd} aria-hidden={true}><CubeMd/></div>
        <div className={`cube cube--lg ${isAnimStated ? `is-hidden` : ``}`} ref={cubeLG => this._cubeLG = cubeLG} aria-hidden={true}><CubeMd/></div>
        <div className={`cube cube--sm ${isAnimStated ? `is-hidden` : ``}`} ref={cubeSM => this._cubeSM = cubeSM} aria-hidden={true}><CubeSm/></div>
        <div className={`cube cube--sm cube--rotate ${isAnimStated && `is-hidden`}`} ref={cubeSMRotate => this._cubeSMRotate = cubeSMRotate}
             aria-hidden={true}>
          <CubeSmRotate/></div>
        <div className={`cube cube--sm ${isAnimStated && `is-hidden`}`} ref={cubeSM => this._cubeSMRotate1 = cubeSM} aria-hidden={true}><CubeSm/></div>
        <div className={`cube cube--sm cube--rotate ${isAnimStated && `is-hidden`}`} ref={cubeSM => this._cubeSMRotate2 = cubeSM} aria-hidden={true}>
          <CubeSm/>
        </div>
      </>
    )
  }
}

export default AnimationCubes
