import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import cd from '../../../images/DisasterRecovery_Subpage.jpg';
import cc from '../../../images/CloudCommon.png';
import '../../../components/layout.css';

// const wid = {
//   width: "91%",
// }

export class CloudDisasterRecovery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			fields: {},
			errors: {}
		};

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState((prevState) => ({
			modal: !prevState.modal
		}));
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layout>
				<div className='bg-lightgrey container'>
					<div className='text-black w-100 mt-3 py-2 flex-col d-flex text-justify'>
						<div className='w-50 px-3 mt-3'>
							<img height='auto' width='100%' className='' src={cd} alt='Cloud Disaster Recovery' />
						</div>

						<div className='w-100 px-3 pt-2 text-black'>
							<h4 className=''>
								Protect your enterprise data with recovery capabilities that keep the lights on!
							</h4>
							<p className='lineHeight-34 '>
								<ul>
									<li>Data integrity for large, enterprise-class applications.</li>
									<li>Back to business as per our requirements.</li>
								</ul>
							</p>

							<p className='my-3'>
								<h3>Why&nbsp;choose&nbsp;SYNECTIKS?</h3>
							</p>

							<p className='lineHeight-34'>
								We design and build DR solutions according to your unique business needs, offering:
								<br />{' '}
								<ul>
									<li>
										<b>Customization:</b> We build the solution according to your business
										continuity needs. With RPO, RTO, Secondary Site Location, Failover and Failback
										options, we choose the best solution.
									</li>
									<li>
										<b>Security:</b> Maintain the safety of your data with our state-of-the-art
										encryption.
									</li>
									<li>
										<b>Tiering:</b> Leverage our solutions for optimizing cost – whether it is
										active-active, active-passive
									</li>
									<li>
										<b>Technology:</b> We leverage VMware and native device replication capabilities
										to deliver industry-leading capabilities.
									</li>
								</ul>
							</p>
						</div>
					</div>

					<div className='px-5'>
						<p className='lineHeight-24'>
							<a className='navlink navfont noLine text-logoblue cursPoint' onClick={this.toggle}>
								<small>Contact&nbsp;Us&nbsp;</small>
							</a>
							to learn more about SYNECTIKS Disaster Recover as a Service.
							<br />{' '}
						</p>
					</div>

					<div className=''>
						<Modal isOpen={this.state.modal} toggle={this.toggle}>
							<ModalHeader className='bg-lightgrey' toggle={this.toggle}>
								Contact Us
							</ModalHeader>
							<ModalBody className='bg-lightgrey brdr-btm-030'>
								<ModalContact />
							</ModalBody>
							{/* <ModalFooter className="bg-lightgrey">
    <div className="text-center p-2" >
      <button className="btn bg-logoblue text-white btnSend" id="submit" value="Submit">Submit</button>
    </div>{" "}
  </ModalFooter> */}
						</Modal>
					</div>
					<div className='container'>
						<div className='d-flex justify-content-around align-items-center mt-5 flex-col' />
					</div>
				</div>
				<Helmet>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `
						}}
					/>
				</Helmet>
			</Layout>
		);
	}
}
export default CloudDisasterRecovery;
