/* eslint-disable react/no-array-index-key */
type Data = {
	label: string;
	items: Array<{
		title: string;
		description?: string;
		organization?: string;
		date?: string;
	}>;
}

type Props = {
	data: Data,
	ul?:boolean
};

export default function Box({ data, ul = false }: Props) {
  if (!data) return <div>Loading</div>;

  return (
    <article className="mt-5 border border-gray-200 rounded-xl p-4 md:mt-6">
      <h3 className="text-xl font-semibold">
        {data.label}
      </h3>
      <div className={`flex flex-col ${!ul ? 'gap-5' : ''} mt-5 print:mt-0`}>
        {data.items.map(({
          title, description, organization, date,
        }, index) => (!ul ? (
          <div key={index}>
            <h4 className="font-semibold">{title}</h4>
            {organization && date && <p className="font-light italic text-sm">{`${organization} / ${date}`}</p>}
            {description && (
              <div>
                {description}
              </div>
            )}
          </div>
        ) : (<li className="list-none" key={index}>{title}</li>)))}
      </div>
    </article>
  );
}
