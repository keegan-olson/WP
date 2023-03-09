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
            <img className="mt-3 mx-auto max-h-[200px] flex-shrink-0 rounded" src={urlFor(art.image).url()} alt={art.altText} />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{art.title}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{art.title}</dd>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  )
}


