import md from 'markdown-it'
import BlogDate from './BlogDate'
import Link from 'next/link';

export default function BlogSummary(data) {
    return (
              <li key={data.slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                	<span><BlogDate d={data.f.date}/></span>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 tracking-tight no-underline">
                            <Link
                              href={'/blog/' + data.slug}>
                              <a className="no-underline tiny-blog-title"
                            >
                              {data.f.title}
                              </a>
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                          </div>
                        </div>
                        <div className="prose max-w-none">
                          {data.f.metaDesc}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={'/blog/' + data.slug}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "{data.f.title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
    )
}
