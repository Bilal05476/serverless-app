import ArchivedCard from "./ArchivedCard";
import LinkCard from "./LinkCard";
const LinkList = ({ links, refreshLinks }) => {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links &&
        links
          .filter((link) => !link.archived)
          .map((link) => (
            <LinkCard link={link} key={link._id} refreshLinks={refreshLinks} />
          ))}
      <hr />
      <h2 className="my-4">Archived Links</h2>
      {links &&
        links
          .filter((link) => link.archived)
          .map((link) => (
            <ArchivedCard
              link={link}
              key={link._id}
              refreshLinks={refreshLinks}
            />
          ))}
      <hr />
    </div>
  );
};

export default LinkList;
