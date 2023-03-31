import Project1 from "../assets/img/project-image-1.jpg";
import Project2 from "../assets/img/project-image-2.jpg";
import Project3 from "../assets/img/project-image-3.jpg";
import Project4 from "../assets/img/project-image-4.jpg";
import Project5 from "../assets/img/project-image-5.jpg";
import React from "react";

function Works() {
	return (
		<div className='work-section wf-section'>
			<div className='work-bg yellow-gradient' />
			<div className='container-large w-container'>
				<div className='align-center'>
					<h2 className='section-title'>Transporting across the world</h2>
				</div>
				<div className='mg-top-30'>
					<div className='w-layout-grid work-grid'>
						<div
							id='w-node-d9a5ad58-057c-a763-bbe6-c17c9cb18fce-42f829bf'
							className='work-card'>
							<div className='work-image-shade'>
								<div className='work-text-wrap'>
									<h3 className='work-card-title'>Liquid Transportation</h3>
									<p className='work-text'>Premium Tankers</p>
								</div>
							</div>
							<img
								src={Project1}
								loading='lazy'
								width={603}
								alt='Transport Image'
							/>
						</div>
						<div
							id='w-node-df616d07-63e8-a31f-b9bd-812958e0cd30-42f829bf'
							className='work-card'>
							<div className='work-image-shade'>
								<div className='work-text-wrap'>
									<h3 className='work-card-title'>Packaging Solutions</h3>
									<p className='work-text'>Warehouse Management</p>
								</div>
							</div>
							<img
								src={Project2}
								loading='lazy'
								width={594}
								alt='Transport Image'
							/>
						</div>
						<div
							id='w-node-f65af531-af57-e694-8a8a-bee06377622e-42f829bf'
							className='work-card'>
							<div className='work-image-shade'>
								<div className='work-text-wrap'>
									<h3 className='work-card-title'>Contract Logistics</h3>
									<p className='work-text'>Road Transportation</p>
								</div>
							</div>
							<img
								src={Project3}
								loading='lazy'
								width={534}
								alt='Transport Image'
							/>
						</div>
						<div
							id='w-node-_006464a1-7164-3943-ef8f-ec192d1fdbb6-42f829bf'
							className='work-card'>
							<div className='work-image-shade'>
								<div className='work-text-wrap'>
									<h3 className='work-card-title'>
										Warehouse &amp; Distribution
									</h3>
									<p className='work-text'>Large Warehouse</p>
								</div>
							</div>
							<img
								src={Project4}
								loading='lazy'
								width={519}
								alt='Transport Image'
							/>
						</div>
						<div
							id='w-node-_5bd0f6bf-80bf-3672-5655-2884de19a405-42f829bf'
							className='work-card'>
							<div className='work-image-shade'>
								<div className='work-text-wrap'>
									<h3 className='work-card-title'>Specialized Transport</h3>
									<p className='work-text'>Ocean Transports</p>
								</div>
							</div>
							<img
								src={Project5}
								loading='lazy'
								width={496}
								alt='Transport Image'
							/>
						</div>
					</div>
				</div>
				<div className='mg-top-60' style={{ maxWidth: "100%" }}>
					<div className='align-center'>
						<a
							data-w-id='25461b7a-b71a-7f01-d198-7700f6ca7c49'
							href='our-project.html'
							className='dark-overlay-button w-inline-block'>
							<div>More Work</div>
							<div
								className='dark-button-hover'
								style={{
									maxWidth: "100%",
									WebkitTransform:
										"translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
									MozTransform:
										"translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
									msTransform:
										"translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
									transform:
										"translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
								}}>
								<a href='#'>Link</a>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Works;
