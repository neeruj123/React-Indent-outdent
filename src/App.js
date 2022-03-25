import React, { useState } from 'react';



import Item  from "./Item";
function App() {

	return <main>


		<section class="body-font ">
			<div class="container px-5 py-24 ">
				<div className="border-b-2 font-bold" >MATHEMATICS</div>
				<div className='flex flex-row gap-1 border-b-2'>
					<div className='flex flex-col w-1/3'>
						<h4 className="font-semibold">Actions</h4>
						<p className="text-neutral-400">Move,Indent,Outdent,Delete</p>
					</div>
					<div className='flex flex-col'>
						<h4 className="font-semibold">Standard</h4>
						<p className="text-neutral-400">The Text of the Standard</p>
					</div>
				</div>
				<div>
					<Item />
				</div>
				<button class="m-8 w-11/12 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
			</div>
		</section>

	</main>;
}

export default App;
