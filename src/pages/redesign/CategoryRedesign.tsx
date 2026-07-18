import { Check, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import JewelleryCard from '../../components/ui/JewelleryCard';
import { categoryTiles, products } from '../../data/catalog';

const collectionCopy: Record<string, { title: string; eyebrow: string; body: string; image: string }> = {
  rings: {
    title: 'Rings',
    eyebrow: 'Wear your meaning',
    body: 'Solitaires, bands and statement forms, made in gold and set with certified stones.',
    image: products[1].image,
  },
  necklaces: {
    title: 'Necklaces',
    eyebrow: 'Close to the heart',
    body: 'From quiet pendants to ceremonial chokers, discover silhouettes for every kind of celebration.',
    image: products[0].image,
  },
  earrings: {
    title: 'Earrings',
    eyebrow: 'Light, in motion',
    body: 'Everyday studs, modern drops and heirloom-inspired earrings with a beautifully balanced fit.',
    image: products[2].image,
  },
  bangles: {
    title: 'Bangles & Bracelets',
    eyebrow: 'Stack your story',
    body: 'Fluid tennis bracelets, hand-engraved kadas and gold bangles designed to live beautifully together.',
    image: products[3].image,
  },
  'bridal-sets': {
    title: 'The Bridal Edit',
    eyebrow: 'For your forever',
    body: 'Private-consultation bridal jewellery, handcrafted around your ceremonies, styling and story.',
    image: products[10].image,
  },
  gifts: {
    title: 'Gifts',
    eyebrow: 'Give something lasting',
    body: 'Meaningful fine jewellery, thoughtfully boxed and ready for birthdays, milestones and new beginnings.',
    image: products[11].image,
  },
  featured: {
    title: 'All Jewellery',
    eyebrow: 'The Ruprays collection',
    body: 'Explore modern icons and heirloom-inspired designs across fine gold, diamonds and precious stones.',
    image: products[4].image,
  },
};

const priceFilters = [
  { label: 'All prices', value: 'all' },
  { label: 'Under ₹50,000', value: 'under50' },
  { label: '₹50,000 – ₹1 lakh', value: '50to100' },
  { label: 'Above ₹1 lakh', value: 'over100' },
];

export default function CategoryRedesign() {
  const { slug = 'featured' } = useParams();
  const [metal, setMetal] = useState('All');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('Featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const content = collectionCopy[slug] ?? collectionCopy.featured;

  const visibleProducts = useMemo(() => {
    let result = slug === 'featured' ? products : products.filter((product) => product.slug === slug);
    if (!result.length) result = products;
    if (metal !== 'All') result = result.filter((product) => product.metal === metal);
    if (price === 'under50') result = result.filter((product) => product.price < 50000);
    if (price === '50to100') result = result.filter((product) => product.price >= 50000 && product.price <= 100000);
    if (price === 'over100') result = result.filter((product) => product.price > 100000);
    if (sort === 'Price: Low to High') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'Price: High to Low') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'Newest') result = [...result].sort((a, b) => b.id - a.id);
    return result;
  }, [metal, price, slug, sort]);

  const clearFilters = () => {
    setMetal('All');
    setPrice('all');
  };

  const FilterContent = () => (
    <>
      <div className="border-b border-[#18384e]/10 pb-8">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-[#1c2b36]">Metal colour</h3>
          {metal !== 'All' && <button type="button" onClick={() => setMetal('All')} className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#506c63]">Clear</button>}
        </div>
        <div className="space-y-3">
          {['All', 'Yellow Gold', 'White Gold', 'Rose Gold'].map((option) => (
            <label key={option} className="flex cursor-pointer items-center justify-between text-sm text-[#5f6d75]">
              <span>{option}</span>
              <input type="radio" name="metal" value={option} checked={metal === option} onChange={() => setMetal(option)} className="accent-[#18384e]" />
            </label>
          ))}
        </div>
      </div>
      <div className="pt-8">
        <h3 className="mb-5 font-serif text-2xl text-[#1c2b36]">Price</h3>
        <div className="space-y-3">
          {priceFilters.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center justify-between text-sm text-[#5f6d75]">
              <span>{option.label}</span>
              <input type="radio" name="price" value={option.value} checked={price === option.value} onChange={() => setPrice(option.value)} className="accent-[#18384e]" />
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-[#f5f2ea] text-[#1c2b36]">
      <section className="relative min-h-[500px] overflow-hidden bg-[#0b1b2a] pt-28 text-white md:min-h-[580px]">
        <img src={content.image} alt={content.title} className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b2a]/95 via-[#0b1b2a]/60 to-[#0b1b2a]/20" />
        <div className="relative mx-auto flex min-h-[390px] max-w-[1500px] items-end px-5 pb-14 md:min-h-[470px] md:px-10 md:pb-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7c59a]">{content.eyebrow}</p>
            <h1 className="font-serif text-6xl leading-none md:text-8xl">{content.title}</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">{content.body}</p>
          </div>
        </div>
      </section>

      <nav aria-label="Jewellery categories" className="border-b border-[#18384e]/10 bg-white px-5 md:px-10">
        <div className="product-scroll mx-auto flex max-w-[1500px] gap-8 overflow-x-auto py-5">
          {categoryTiles.map((category) => (
            <Link
              key={category.slug}
              to={`/collection/${category.slug}`}
              className={`shrink-0 border-b pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition ${slug === category.slug ? 'border-[#18384e] text-[#18384e]' : 'border-transparent text-[#6f7a80] hover:text-[#18384e]'}`}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="px-5 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#18384e]/10 pb-6">
            <p className="text-sm text-[#6f7a80]"><strong className="font-semibold text-[#1c2b36]">{visibleProducts.length}</strong> pieces</p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setFiltersOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-[#18384e]/15 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] lg:hidden">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="relative">
                <span className="sr-only">Sort products</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="appearance-none rounded-full border border-[#18384e]/15 bg-white py-3 pl-5 pr-10 text-[11px] font-semibold uppercase tracking-[0.12em] outline-none">
                  {['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
              </label>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[230px_1fr] xl:gap-16">
            <aside className="hidden lg:block">
              <FilterContent />
            </aside>

            <div>
              {(metal !== 'All' || price !== 'all') && (
                <div className="mb-7 flex flex-wrap items-center gap-2">
                  {metal !== 'All' && <button type="button" onClick={() => setMetal('All')} className="inline-flex items-center gap-2 rounded-full bg-[#e7ebe3] px-4 py-2 text-xs">{metal}<X className="h-3 w-3" /></button>}
                  {price !== 'all' && <button type="button" onClick={() => setPrice('all')} className="inline-flex items-center gap-2 rounded-full bg-[#e7ebe3] px-4 py-2 text-xs">{priceFilters.find((item) => item.value === price)?.label}<X className="h-3 w-3" /></button>}
                  <button type="button" onClick={clearFilters} className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#506c63]">Clear all</button>
                </div>
              )}

              {visibleProducts.length ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-3">
                  {visibleProducts.map((product) => <JewelleryCard key={product.id} product={product} />)}
                </div>
              ) : (
                <div className="rounded-md bg-white p-12 text-center">
                  <Check className="mx-auto mb-5 h-7 w-7 text-[#a4864f]" />
                  <h2 className="font-serif text-3xl">Your perfect piece is worth finding.</h2>
                  <p className="mt-3 text-sm text-[#6f7a80]">Try clearing a filter to see more of the collection.</p>
                  <button type="button" onClick={clearFilters} className="lux-button mt-7">Clear filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {filtersOpen && (
        <div className="fixed inset-0 z-[80] bg-black/45 lg:hidden" role="dialog" aria-modal="true" aria-label="Product filters">
          <div className="ml-auto flex h-full w-[min(88vw,390px)] flex-col bg-[#f5f2ea] p-7">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-3xl">Filters</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="grid h-10 w-10 place-items-center rounded-full border border-[#18384e]/15"><X className="h-4 w-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto"><FilterContent /></div>
            <button type="button" onClick={() => setFiltersOpen(false)} className="lux-button mt-7 w-full justify-center">Show {visibleProducts.length} pieces</button>
          </div>
        </div>
      )}
    </div>
  );
}
