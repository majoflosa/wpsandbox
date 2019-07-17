import './editor.scss';

// console.log( 'wp: ', wp );
const { registerBlockType } = wp.blocks;
const { InspectorControls, BlockControls, AlignmentToolbar, BlockAlignmentToolbar } = wp.editor;
const { PanelBody, PanelRow, TextControl, SelectControl } = wp.components;

registerBlockType( 'mauricio/character', {
    title: 'Character', // to make translatable: wp.i18n.__( 'Character', 'domain' )
    description: 'Creates a block for a story character',
    category: 'common',
    icon: 'universal-access',
    keywords: [ 'Character', 'Story' ],
    supports: {
        html: false
    },
    attributes: {
        name: { source: 'text', type: 'string', selector: '.char-name' },
        bio: { source: 'text', type: 'string', selector: '.char-bio' },
        tribe: { source: 'text', type: 'string', selector: '.char-tribe', default: 'Agenes' },
        text_alignment: { type: 'string' },
        block_alignment: { type: 'string', default: 'wide' }
    },
    getEditWrapperProps: ({ block_alignment }) => {
        if ( block_alignment === 'left' || block_alignment === 'right' || 'full' === block_alignment ) {
            return { 'data-align': block_alignment };
        }
    },
    edit: ( props ) => {
        return [
            <InspectorControls>
                <PanelBody title="Basics">
                    <PanelRow><p>Configure the contents of the block here.</p></PanelRow>
                    <TextControl label="Character Name: " help="The character's name" 
                        value={props.attributes.name} 
                        onChange={ (new_val) => { props.setAttributes({ name: new_val}) } }
                    />
                    <TextControl label="Character Bio: " help="A description of the character" 
                        value={props.attributes.bio} 
                        onChange={ (new_val) => { props.setAttributes({ bio: new_val }) } }
                    />
                    <SelectControl label="Character Tribe: " help="The name of the tribe of the character" 
                        value={props.attributes.tribe} 
                        options={[
                            { value: 'Agenes', label: 'Agenes' },
                            { value: 'Feles', label: 'Feles' },
                            { value: 'Venthaal', label: 'Venthaal' },
                        ]}
                        onChange={ (new_val) => { props.setAttributes({ tribe: new_val }) } }
                    />
                </PanelBody>
            </InspectorControls>,
            <div className={ props.className }>
                <BlockControls>
                    <BlockAlignmentToolbar
                        value={props.attributes.block_alignment}
                        onChange={(new_val) => props.setAttributes({ block_alignment: new_val })}
                    />
                    <AlignmentToolbar 
                        value={props.attributes.text_alignment} 
                        onChange={(new_val) => props.setAttributes( {text_alignment: new_val} )} 
                    />
                </BlockControls>
                <ul style={{ textAlign: props.attributes.text_alignment }}>
                    <li>
                        <strong>Character Name:</strong>
                        <span className="char-name">{props.attributes.name}</span>
                    </li>
                    <li>
                        <strong>Character Bio:</strong>
                        <span className="char-bio">{props.attributes.bio}</span>
                    </li>
                    <li>
                        <strong>Character Tribe:</strong>
                        <span className="char-tribe">{props.attributes.tribe}</span>
                    </li>
                </ul>
            </div>
        ]
    },
    save: ( props ) => (
        <div className={ `align${props.attributes.block_alignment}` }>
            <ul style={{ textAlign: props.attributes.text_alignment }}>
                <li>
                    <strong>Character Name:</strong>
                    <span className="char-name">{props.attributes.name}</span>
                </li>
                <li>
                    <strong>Character Bio:</strong>
                    <span className="char-bio">{props.attributes.bio}</span>
                </li>
                <li>
                    <strong>Character Tribe:</strong>
                    <span className="char-tribe">{props.attributes.tribe}</span>
                </li>
            </ul>
        </div>
    )
} );
