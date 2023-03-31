import React from "react";

function Banner() {
	return (
		<div className='banner-section wf-section'>
			<div className='container w-container'>
				<div className='banner-title-wrap'>
					<div className='subtitle-wrap-dark'>
						<div className='subtitle-border' />
						<p className='subtitle-dark'>
							Logistics &amp; Supply Chain Solutions
						</p>
					</div>
					<h1 className='page-title'>
						Safest Logistics Solutions Provider With Integrity
					</h1>
					<p className='text-white'>
						We're a leading provider of less-than-truckload freight
						transportation with the world-class network, technology and service
						our customers need at all times.
					</p>
					<div className='mg-top-30'>
						<a
							data-w-id='eb561e47-cb03-a646-ba49-a9acddba1c6c'
							href='about-us'
							className='yellow-overlay-button w-inline-block'>
							<div>Explore More</div>
							<div
								className='yellow-button-hover'
								style={{
									transform:
										"translate3d(0,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)",
								}}></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
