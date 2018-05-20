import React, { Component } from 'react';
import exampleAction from '../../actions/exampleAction'
import {URL} from '../../lib/constants'
import JSONPretty from 'react-json-pretty';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(exampleAction.example("test123"));
    this.getRuns = this.getRuns.bind(this);
    this.renderRuns = this.renderRuns.bind(this);
    this.getRuns();
    const runs = [{"s3":{"ETag":"\"ed1377e9d71367b27156763ed6731a07\""},"user":"123","options":[{"value":"0.200","key":"18_12"},{"value":"0.800","key":"18_18"}],"id":"job_num_90_rand_QYPb3Ab.zip"},{"s3":{"ETag":"\"513886d7184d69c3d35dbb7837f180f5\""},"user":"123","options":[{"value":"1.000","key":"18_12"},{"value":"0.300","key":"18_18"}],"id":"job_num_43_rand_CZYLNJr.zip"},{"s3":{"ETag":"\"b3674085a344521c801a47685797d9bf\""},"user":"123","options":[{"value":"0.700","key":"18_12"},{"value":"0.200","key":"18_18"}],"id":"job_num_29_rand_BYgYm5z.zip"},{"s3":{"ETag":"\"02a7891af7289bf5dc6f90851098d851\""},"user":"123","options":[{"value":"0.400","key":"18_12"},{"value":"0.100","key":"18_18"}],"id":"job_num_15_rand_wW8nT3k.zip"},{"s3":{"ETag":"\"9b1673a99cc5d02dc11e506efdb53123\""},"user":"123","options":[{"value":"0.900","key":"18_12"},{"value":"0.100","key":"18_18"}],"id":"job_num_20_rand_myUwJ6S.zip"},{"s3":{"ETag":"\"8cc99449425b9ec30ccac8f4c198357a\""},"user":"123","options":[{"value":"0.100","key":"18_12"},{"value":"0.200","key":"18_18"}],"id":"job_num_23_rand_nWBZDEl.zip"},{"s3":{"ETag":"\"5de72fdb6be42de94018961c7cddb96b\""},"user":"123","options":[{"value":"0.300","key":"18_12"},{"value":"1.000","key":"18_18"}],"id":"job_num_113_rand_Zv4JgVV.zip"},{"s3":{"ETag":"\"250e5a032dd8087449edd13618c5e425\""},"user":"123","options":[{"value":"0.800","key":"18_12"},{"value":"0.200","key":"18_18"}],"id":"job_num_30_rand_pVrS4pm.zip"},{"s3":{"ETag":"\"cdd1423b08cf13056b60b0b50dabe70e\""},"user":"123","options":[{"value":"0.200","key":"18_12"},{"value":"0.000","key":"18_18"}],"id":"job_num_2_rand_Yy6Pwsw.zip"},{"s3":{"ETag":"\"236e39417b0bdd98f024a3b64d4776c6\""},"user":"123","options":[{"value":"0.900","key":"18_12"},{"value":"0.600","key":"18_18"}],"id":"job_num_75_rand_flG3drh.zip"},{"s3":{"ETag":"\"ae7514bd4f13ba9d319eae23d41a3f0c\""},"user":"123","options":[{"value":"0.000","key":"18_12"},{"value":"1.000","key":"18_18"}],"id":"job_num_110_rand_bPaKMAc.zip"},{"s3":{"ETag":"\"558517eb5a17bef18253d5251133a2e5\""},"user":"123","options":[{"value":"a","key":"12_8"}],"id":"job_num_121_rand_jNy7oXs.zip"},{"s3":{"ETag":"\"828b0892d1f8e4c5df5af7f81a81f218\""},"user":"123","options":[{"value":"0.800","key":"18_12"},{"value":"0.300","key":"18_18"}],"id":"job_num_41_rand_Vm3NVom.zip"},{"s3":{"ETag":"\"1b219aa96283aaac06eb817f00bdfab1\""},"user":"123","options":[{"value":"0.200","key":"18_12"},{"value":"0.100","key":"18_18"}],"id":"job_num_13_rand_BxRVfj4.zip"},{"s3":{"ETag":"\"5dafca2b0fabcb6ad46bf5468fbfd3fb\""},"user":"123","options":[{"value":"0.600","key":"18_12"},{"value":"0.100","key":"18_18"}],"id":"job_num_17_rand_V8U3rfC.zip"},{"s3":{"ETag":"\"d3ad5662854d89a942a9190b79d79481\""},"user":"123","options":[{"value":"0.000","key":"18_12"},{"value":"0.400","key":"18_18"}],"id":"job_num_44_rand_pql3oKc.zip"},{"s3":{"ETag":"\"b19fe346b85c7abb054181a8011632dd\""},"user":"123","options":[{"value":"0.100","key":"18_12"},{"value":"0.500","key":"18_18"}],"id":"job_num_56_rand_kZoLlTG.zip"},{"s3":{"ETag":"\"1fd3416ef698350a1ce833f2e3d63572\""},"user":"123","options":[{"value":"0.300","key":"18_12"},{"value":"0.000","key":"18_18"}],"id":"job_num_3_rand_MW878iF.zip"},{"s3":{"ETag":"\"7bdbdd2d86481c206bc5963b5ce626aa\""},"user":"123","options":[{"value":"0.200","key":"18_12"},{"value":"0.200","key":"18_18"}],"id":"job_num_24_rand_M6qi1ft.zip"},{"s3":{"ETag":"\"56ef6fd56e398631ca3fd8a3b20a1064\""},"user":"123","options":[{"value":"0.300","key":"18_12"},{"value":"0.700","key":"18_18"}],"id":"job_num_80_rand_6QnQmoO.zip"},{"s3":{"ETag":"\"00362425b23af07cecd094413f4793b1\""},"user":"123","options":[{"value":"0.800","key":"18_12"},{"value":"0.700","key":"18_18"}],"id":"job_num_85_rand_gfYaCUm.zip"},{"s3":{"ETag":"\"7f6011954cd944515963c9756564f820\""},"user":"123","options":[{"value":"0.500","key":"18_12"},{"value":"0.200","key":"18_18"}],"id":"job_num_27_rand_1SdUuDG.zip"},{"s3":{"ETag":"\"c316afb90e633d9deb3847efc114cab7\""},"user":"123","options":[{"value":"0.600","key":"18_12"},{"value":"0.800","key":"18_18"}],"id":"job_num_94_rand_XfWJmrj.zip"},{"s3":{"ETag":"\"e4009dad8bc784050c0659866e329a16\""},"user":"123","options":[{"value":"0.900","key":"18_12"},{"value":"0.400","key":"18_18"}],"id":"job_num_53_rand_ZkuqLv9.zip"}];

    this.state = {loading: false, data: "", runs};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getRuns() {
  }

  renderRuns() {

    const all = this.state.runs.map((item, i)=>{
      return <div className="run-item" key={i}>
        <button className="btn btn-border">
          Run
        </button>
        <JSONPretty id={i}  json={item}></JSONPretty>
      </div>
    });
    return all;
  }

  render() {

    if(this.state.loading) {
      return <div>Loading</div>
    } else {
      return <div>
        {this.renderRuns()}
      </div>
    }



  }
}

export default Home