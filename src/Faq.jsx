function Faq() {
	return (
		<>
			{/* FAQ Header */}
			<div className="mb-12 space-y-4 text-wrap text-center sm:mb-16 lg:mb-24">
				<h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
					Frequently Asked Questions
				</h2>
				<p className="text-base-content/80 text-xl">
					Levarage artificial intelligence algorithms to provide users with
					valuable insights
				</p>
			</div>
			{/* Faq stepper */}
			<div
				id="faq-carousel-1"
				data-carousel='{ "loadingClasses": "opacity-0",  "slidesQty": { "xs": 1, "md": 2, "lg": 3 } }'
				className="relative w-full"
			>
				<div className="flex gap-1">
					{/* Previous Slide */}
					<button
						className="btn btn-circle carousel-prev btn-outline btn-primary hover:bg-primary relative hover:text-white max-md:hidden"
						disabled="disabled"
					>
						<span className="icon-[tabler--arrow-left] size-5.5" />
					</button>
					<div className="carousel rounded-box">
						<div className="carousel-body h-full gap-12 opacity-0">
							{/* Slide 1 */}
							<div className="carousel-slide m-2">
								<div className="rounded-box hover:bg-base-100 hover:ring-primary p-4 text-center hover:ring">
									<h5 className="text-base-content mb-2 text-xl font-semibold">
										Do you offer home delivery?
									</h5>
									<p className="text-base-content/80">
										Yes, we do! You can place your order directly through our
										website or via trusted food delivery platforms like Swiggy
										and Zomato. We ensure that all dishes are packed with care
										and delivered promptly, so you can enjoy restaurant-quality
										food in the comfort of your home.
									</p>
									<div className="group mt-5 flex items-center justify-center gap-2">
										<a
											href="#"
											className="link link-animated link-primary font-normal"
										>
											Learn more
										</a>
										<span className="icon-[tabler--arrow-narrow-right] text-primary size-5 shrink-0 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
									</div>
								</div>
							</div>
							{/* Slide 2 */}
							<div className="carousel-slide m-2">
								<div className="rounded-box hover:bg-base-100 hover:ring-primary p-4 text-center hover:ring">
									<h5 className="text-base-content mb-2 text-xl font-semibold">
										How can I book a table?
									</h5>
									<p className="text-base-content/80">
										Booking a table is simple and quick. Just head over to our
										reservation page, choose your preferred date and time, and
										confirm your booking in a few clicks. You’ll receive a
										confirmation instantly. Prefer to speak with someone? You
										can also call us directly.
									</p>
									<div className="group mt-5 flex items-center justify-center gap-2">
										<a
											href="#"
											className="link link-animated link-primary font-normal"
										>
											Learn more
										</a>
										<span className="icon-[tabler--arrow-narrow-right] text-primary size-5 shrink-0 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
									</div>
								</div>
							</div>
							{/* Slide 3 */}
							<div className="carousel-slide m-2">
								<div className="rounded-box hover:bg-base-100 hover:ring-primary p-4 text-center hover:ring">
									<h5 className="text-base-content mb-2 text-xl font-semibold">
										What are your opening hours?
									</h5>
									<p className="text-base-content/80">
										We’re open every day from 11:00 AM to 11:00 PM, offering
										both lunch and dinner service. On weekends, we also serve a
										special brunch menu from 10:00 AM to 1:00 PM. Holiday hours
										may vary, so be sure to check our website or follow us on
										social media for real-time updates and special
										announcements.
									</p>
									<div className="group mt-5 flex items-center justify-center gap-2">
										<a
											href="#"
											className="link link-animated link-primary font-normal"
										>
											Learn more
										</a>
										<span className="icon-[tabler--arrow-narrow-right] text-primary size-5 shrink-0 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
									</div>
								</div>
							</div>
							{/* Slide 4 */}
							<div className="carousel-slide m-2">
								<div className="rounded-box hover:bg-base-100 hover:ring-primary p-4 text-center hover:ring">
									<h5 className="text-base-content mb-2 text-xl font-semibold">
										What are your payment options ?
									</h5>
									<p className="text-base-content/80">
										We offer several payment options for your convenience,
										including credit/debit card payments, bank transfers, and
										online payment gateways. We also offer flexible payment
										plans for select travel packages.
									</p>
									<div className="group mt-5 flex items-center justify-center gap-2">
										<a
											href="#"
											className="link link-animated link-primary font-normal"
										>
											Learn more
										</a>
										<span className="icon-[tabler--arrow-narrow-right] text-primary size-5 shrink-0 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
									</div>
								</div>
							</div>
							{/* Slide 5 */}
							<div className="carousel-slide m-2">
								<div className="rounded-box hover:bg-base-100 hover:ring-primary p-4 text-center hover:ring">
									<h5 className="text-base-content mb-2 text-xl font-semibold">
										Do you offer vegan options?
									</h5>
									<p className="text-base-content/80">
										Yes, we do! We offer a variety of vegan dishes that are both
										flavorful and satisfying. Our menu includes plant-based
										starters, mains, and even desserts.
									</p>
									<div className="group mt-5 flex items-center justify-center gap-2">
										<a
											href="#"
											className="link link-animated link-primary font-normal"
										>
											Learn more
										</a>
										<span className="icon-[tabler--arrow-narrow-right] text-primary size-5 shrink-0 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Next Slide */}
					<button className="btn btn-circle carousel-next btn-primary btn-outline hover:bg-primary relative hover:text-white max-md:hidden">
						<span className="icon-[tabler--arrow-right] size-5.5" />
					</button>
				</div>
			</div>
			<span className="intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-900 absolute start-[25%]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={118}
					height={119}
					viewBox="0 0 118 119"
					fill="none"
				>
					<g opacity="0.05">
						<path
							d="M36.4391 42.706C36.2091 42.1358 33.0723 19.7058 60.7168 12.1988C79.3118 7.1492 100.433 13.8137 106.922 29.8927C111.431 41.0682 105.143 50.3678 95.1291 58.2748C91.6043 61.1299 92.769 64.3566 94.2875 68.1195L96.8646 74.5057L76.4101 80.0602L71.3941 67.6302C69.3693 62.6128 67.9605 58.4399 72.2047 53.6183C77.9718 47.1176 84.8999 44.8567 81.6326 36.7601C79.4237 31.2864 73.3964 28.6212 67.8178 30.1361C58.8925 32.5598 57.3147 40.5801 57.9297 45.854L36.4391 42.706ZM108.7 92.9284C111.6 100.113 107.624 107.645 99.6907 109.799C91.8806 111.92 83.2115 107.821 80.3124 100.637C77.3672 93.339 81.3425 85.8064 89.1526 83.6856C97.0862 81.5312 105.755 85.6303 108.7 92.9284Z"
							fill="var(--color-primary)"
							fillOpacity="0.5"
						/>
						<path
							d="M95.8779 81.1625L88.4385 83.2969L98.2235 108.915L105.663 106.78L95.8779 81.1625Z"
							fill="var(--color-primary)"
							fillOpacity="0.5"
						/>
						<path
							d="M43.8796 40.5732C43.6495 40.003 40.5127 17.573 68.1572 10.066C86.7523 5.01639 107.874 11.6809 114.362 27.7599C118.872 38.9354 112.583 48.235 102.569 56.1421C99.0444 58.9972 100.209 62.2239 101.728 65.9868L104.305 72.3729L83.8502 77.9275L78.8342 65.4975C76.8094 60.48 75.4007 56.3072 79.6448 51.4856C85.412 44.9848 92.3401 42.724 89.0727 34.6274C86.8639 29.1537 80.8365 26.4884 75.2579 28.0033C66.3327 30.427 64.7548 38.4474 65.3699 43.7212L43.8796 40.5732ZM116.141 90.7956C119.04 97.98 115.064 105.512 107.131 107.667C99.3207 109.788 90.6516 105.689 87.7525 98.5046C84.8073 91.2062 88.7826 83.6737 96.5927 81.5528C104.527 79.3983 113.196 83.4976 116.141 90.7956Z"
							fill="var(--color-primary)"
						/>
						<path
							d="M35.8188 44.1504L43.2582 42.0161L65.2665 44.5151L57.8274 46.6493L35.8188 44.1504Z"
							fill="var(--color-primary)"
							fillOpacity="0.4"
						/>
					</g>
				</svg>
			</span>
			<span className="intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-1500 absolute end-[35%] max-sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={116}
					height={150}
					viewBox="0 0 116 150"
					fill="none"
				>
					<g opacity="0.08">
						<path
							d="M16.9554 30.3465C17.0827 29.5437 28.4181 0.863619 62.9102 5.34236C86.1113 8.35499 104.343 26.7815 100.753 49.421C98.258 65.1563 85.4391 73.3239 69.547 77.9789C63.906 79.7044 63.0386 84.1802 62.1985 89.4785L60.7728 98.4703L35.2516 95.1564L38.0267 77.6548C39.1468 70.5902 40.3728 64.8497 48.0714 61.0976C58.4992 56.0608 67.392 56.724 69.1996 45.3239C70.4216 37.6168 65.719 31.4347 58.7586 30.5309C47.6225 29.0849 40.6813 38.0158 37.885 44.6991L16.9554 30.3465ZM61.3688 126.569C59.7648 136.685 50.5783 143.849 40.6794 142.564C30.9348 141.298 24.3449 132.085 25.9488 121.97C27.5782 111.694 36.7648 104.529 46.5095 105.795C56.4083 107.08 62.9981 116.293 61.3688 126.569Z"
							fill="var(--color-primary)"
							fillOpacity="0.5"
						/>
						<path
							d="M56.1439 106.729L46.9902 105.416L41.7716 141.786L50.9253 143.1L56.1439 106.729Z"
							fill="var(--color-primary)"
							fillOpacity="0.5"
						/>
						<path
							d="M26.1092 31.661C26.2365 30.8582 37.5719 2.17807 72.064 6.65682C95.2651 9.66945 113.496 28.096 109.907 50.7355C107.412 66.4707 94.5929 74.6383 78.7005 79.2933C73.0594 81.0188 72.192 85.4946 71.3519 90.7929L69.9262 99.7847L44.4051 96.4708L47.1801 78.9692C48.3003 71.9046 49.5263 66.1641 57.2249 62.412C67.6526 57.3752 76.5455 58.0384 78.3531 46.6383C79.5751 38.9312 74.8724 32.7491 67.912 31.8453C56.776 30.3993 49.8347 39.3302 47.0384 46.0135L26.1092 31.661ZM70.5222 127.884C68.9183 137.999 59.7317 145.163 49.8329 143.878C40.0882 142.613 33.4984 133.4 35.1022 123.284C36.7316 113.008 45.9182 105.844 55.6629 107.109C65.5621 108.395 72.1515 117.608 70.5222 127.884Z"
							fill="var(--color-primary)"
						/>
						<path
							d="M15.1777 30.0176L24.3314 31.331L46.0603 45.9576L36.907 44.6442L15.1777 30.0176Z"
							fill="var(--color-primary)"
							fillOpacity="0.4"
						/>
					</g>
				</svg>
			</span>
		</>
	);
}
export default Faq;
