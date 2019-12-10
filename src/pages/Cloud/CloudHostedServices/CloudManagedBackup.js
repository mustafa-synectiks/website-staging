import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalContact from '../../../components/ModalContact';
import Layout from '../../../components/layout';
import cc from '../../../images/CloudCommon.png';
import cb from '../../../images/CloudBackup2.png';
import '../../../components/layout.css';
export class CloudManagedBackup extends React.Component {
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
						<div className='w-100'>
							<img height='auto' width='100%' className='' src={cb} alt='Cloud Backup' />
						</div>

						<div className='w-100 pt-3 text-black text-justify'>
							<h4 className=''>Efficiently Protect, Manage and Recover Your Data</h4>
							<p className='lineHeight-34'>
								<ul>
									<li>Protect, manage and access the information you need.</li>
									<li>
										A single interface manages data at a fraction of the time, effort and cost
										required by separate point products.
									</li>
									<li>
										Simplify data management in complex networked storage environments with a
										consistent way to locate and manage data and applications.
									</li>
								</ul>
							</p>
						</div>
					</div>

					<div className='w-100 text-black text-justify' data-aos='fade-up' data-aos-duration='2000'>
						<div className='w-100 pt-3 text-black'>
							<p className='lineHeight-24'>
								Backups and significantly-restores, should be promptly available inside your budget.
								Assumed the advances in cloud and hybrid IT environments, it’s time to switch your
								capital budget, backup operations, quality management, tools and facilities with a
								secure, versatile pay-per-use choice from a trustworthy partner.
								<br />{' '}
							</p>
							<p className='lineHeight-24'>
								SYNECTIKS Backup as a Service provides cost-effective managed service for backup and
								recovery of all types of data. We offer this service where you need it and we ensure
								compliance with national data sovereignty rules through locally deployed assets and
								in-country support.
								<br />{' '}
							</p>
						</div>
					</div>

					<div className='w-100 text-black text-justify' data-aos='fade-up' data-aos-duration='2000'>
						<p className='lineHeight-34 py-3'>
							SYNECTIKS protects all of your structured and unstructured data while enabling self-service
							restoration capability to your application teams. We provide support for:
							<br />{' '}
							<ul>
								<li>Protects files and folders from Servers and Clients</li>
								<li>
									Integrates with workloads including SharePoint, Exchange, Database, Servers and VMs
								</li>
								<li>Protects guest workloads running in VMware environments</li>
								<li>
									Granular restore capability such as mailbox recovery, DB level recovery and Files
								</li>
							</ul>
						</p>
					</div>

					<div className='w-100 text-black text-justify' data-aos='fade-up' data-aos-duration='2000'>
						<p>
							<h3>Why choose SYNECTIKS?</h3>
						</p>

						<p className='lineHeight-34 '>
							SYNECTIKS can deliver end-to-end backup services and support:
							<br />{' '}
							<ul>
								<li>
									<b>Cost Optimization:</b> Unlike competitors whose models increase backup costs over
									time, SYNECTIKS helps clients optimize and even reduce backup costs.
								</li>
								<li>
									<b>Flexibility:</b>Scale up and down based on demand.
								</li>
								<li>
									<b>Security:</b> SYNECTIKS provides end-to-end security expertise to protect your
									data. Data is encrypted in your data center and stored encrypted in SYNECTIKS Cloud
									- the encryption key is stored and managed locally. 256 AES Encrypted, IP Access
									restricted.
								</li>
								<li>
									<b>Reliable:</b> Copies of the data are stored to a single data center location and
									optionally at an additional, remote datacenter.
								</li>
								<li>
									<b>Efficient:</b> De-duplication and compression technologies, ensure that multiple
									copies of the same data is removed from backup cycles, thus optimizing storage
									capacity.
								</li>
								<li>
									<b>Peace of Mind:</b> True backup not just storing data.
								</li>
							</ul>
						</p>
						<p className='lineHeight-24'>
							<a className='navlink navfont noLine text-logoblue cursPoint' onClick={this.toggle}>
								{' '}
								<small>Contact&nbsp;Us&nbsp;</small>
							</a>
							to learn more about SYNECTIKS Backup as a Service.
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
    <div className="text-center p-2" onClick={this.toggle}>
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

export default CloudManagedBackup;
