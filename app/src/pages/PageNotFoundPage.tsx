import {Link} from 'react-router-dom';
import not_found from "../pictures/404_page_not_found.jpg";

export default function PageNotFoundPage() {
    return (
        <main className="grid min-h-screen place-items-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <div className="text-center">
                    <img
                        alt=""
                        src={not_found}
                    />
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re
                        looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-sage-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>)
}