### Basic Usage

```jsx static
<Avatar
  avatarUrl="https://s3.amz.in/image.png"
  size="lg"
/>
```

```js
const avatarUrls = [
  'https://images.unsplash.com/photo-1563170423-18f482d82cc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=faces&w=200&q=80',
  'https://images.unsplash.com/flagged/photo-1566537938705-e1e6fb724bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop&crop=faces&w=200&q=80',
  'https://images.unsplash.com/photo-1566670330201-5dbfc4dcae2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=faces&w=200&q=80',
];

<section>
  <div className="dt-mb-8">
    <h4 className="dt-text-xl">Avatar with size 'md' and 'lg'</h4>
    <div className="dt-flex dt-items-center dt-mb-6">
      <Avatar avatarUrl={avatarUrls[0]} className="dt-mr-5" />
      <Avatar size="lg" avatarUrl={avatarUrls[1]} className="dt-mr-5" />
    </div>
    <h4 className="dt-text-xl dt-mb-2">Avatar with size 'xl'. Might be useful for profile pages.</h4>
    <div className="dt-flex dt-items-center">
      <Avatar size="xl" avatarUrl={avatarUrls[2]} />
    </div>
  </div>
  <div className="dt-mb-8">
    <h4 className="dt-text-xl dt-mb-2">Often times you'll wrap it in a link to user's profile.</h4>
    <div className="dt-flex dt-items-center">
      <a href="/user/user-slug-2" className="dt-mr-5">
        <Avatar avatarUrl={avatarUrls[2]} className="dt-bg-secondary" />
      </a>
      <a href="/user/user-slug-1" className="dt-mr-5">
        <Avatar initials="MR" className="dt-bg-secondary" />
      </a>
    </div>
  </div>
</section>
```

### Avatar without image

```jsx static
<Avatar initials="MR" size="lg" />
```

```js
<section>
  <div className="dt-mb-8">
    <h4 className="dt-text-xl">If image is not available show initials</h4>
    <div className="dt-flex dt-items-center">
      <Avatar initials="MR" className="dt-bg-secondary dt-mr-5" />
      <Avatar initials="HS" className="dt-bg-warning dt-mr-5" size="lg"/>
    </div>
  </div>
  <div className="dt-mb-8">
    <h4 className="dt-text-xl">If you don't provide image or initials, a blank user avatar will be shown</h4>
    <div className="dt-flex dt-items-center">
      <Avatar className="dt-mr-5" />
      <Avatar size="lg" className="dt-mr-5"/>
    </div>
  </div>
</section>
```
