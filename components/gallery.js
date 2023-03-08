import { client, urlFor } from "../lib/sanity";


export default function Gallery({ artworks, }) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 p-20">
      {artworks.map((art) => (
        <li
          key={art.title}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-6">
          <i class="fa-regular fa-heart self-end fa-xl"></i>
            <img className="mx-auto h-2/3 w-2/3 flex-shrink-0 rounded" src={urlFor(art.image).url()} alt={art.altText} />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{art.title}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{art.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  temporary
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href=''
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <i class="fa-light fa-envelope"></i>
                  Email
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}


