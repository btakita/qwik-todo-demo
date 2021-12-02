/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
import { TodoEntity } from '../data/Todo.js';
import { injectEventHandler, provideEntity, provideUrlProp } from '../qwik.js';
export default injectEventHandler(
// Providers
null, provideEntity(TodoEntity.MOCK_USER), provideUrlProp('itemKey'), // TODO(type): add provider to clean this cast up
// Handler
async function remove(todoEntity, itemKey) {
    todoEntity.remove(itemKey);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbV9yZW1vdmUuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInNyYy91aS9JdGVtX3JlbW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQXVCLE1BQU0sWUFBWSxDQUFDO0FBRXBHLGVBQWUsa0JBQWtCO0FBQy9CLFlBQVk7QUFDWixJQUFJLEVBQ0osYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFDbkMsY0FBYyxDQUFDLFNBQVMsQ0FBK0MsRUFBRSxpREFBaUQ7QUFDMUgsVUFBVTtBQUNWLEtBQUssVUFBVSxNQUFNLENBQWEsVUFBc0IsRUFBRSxPQUE4QjtJQUN0RixVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEJ1aWxkZXJJTyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9CdWlsZGVySU8vcXdpay9ibG9iL21haW4vTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kYXRhL0l0ZW0uanMnO1xuaW1wb3J0IHsgVG9kb0VudGl0eSB9IGZyb20gJy4uL2RhdGEvVG9kby5qcyc7XG5pbXBvcnQgeyBpbmplY3RFdmVudEhhbmRsZXIsIHByb3ZpZGVFbnRpdHksIHByb3ZpZGVVcmxQcm9wLCBFbnRpdHlLZXksIFByb3ZpZGVyIH0gZnJvbSAnLi4vcXdpay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEV2ZW50SGFuZGxlcihcbiAgLy8gUHJvdmlkZXJzXG4gIG51bGwsXG4gIHByb3ZpZGVFbnRpdHkoVG9kb0VudGl0eS5NT0NLX1VTRVIpLFxuICBwcm92aWRlVXJsUHJvcCgnaXRlbUtleScpIGFzIHVua25vd24gYXMgUHJvdmlkZXI8RW50aXR5S2V5PEl0ZW1FbnRpdHk+PiwgLy8gVE9ETyh0eXBlKTogYWRkIHByb3ZpZGVyIHRvIGNsZWFuIHRoaXMgY2FzdCB1cFxuICAvLyBIYW5kbGVyXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZSh0aGlzOiBudWxsLCB0b2RvRW50aXR5OiBUb2RvRW50aXR5LCBpdGVtS2V5OiBFbnRpdHlLZXk8SXRlbUVudGl0eT4pIHtcbiAgICB0b2RvRW50aXR5LnJlbW92ZShpdGVtS2V5KTtcbiAgfVxuKTtcbiJdfQ==